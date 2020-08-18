import { Request, Response } from 'express';
import db from '../database/connection';

import jwt from 'jsonwebtoken';

import { compare } from 'bcrypt';

export default class SessionController {
  public async login(request: Request, response: Response) {
    let { email, password } = request.body;

    const users = await db('register_users').select()
    .where('email', '=', `${email}`);

    const user = users[0];

    if (!user) return response.status(404).json({message: 'User not found'});

    const checkPassword = await compare(password, user.password);

    if (!checkPassword) return response.status(404).json({ message: 'Password incorrect' });

    const token = jwt.sign({}, 'haushaushaus', { 
      expiresIn: '1d',
     });

    return response.status(200).json({user, token});
  };
};