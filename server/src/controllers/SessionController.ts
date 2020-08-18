import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { compare } from 'bcrypt';

import authConfig from '../config/auth';

import db from '../database/connection';


export default class SessionController {
  public async login(request: Request, response: Response) {
    let { email, password } = request.body;

    const users = await db('register_users').select()
    .where('email', '=', `${email}`);

    const user = users[0];

    if (!user) return response.status(404).json({message: 'User not found'});

    const checkPassword = await compare(password, user.password);

    if (!checkPassword) return response.status(404).json({ message: 'Password incorrect' });

    const { secret, expiresIn } = authConfig.jwt;

    const token = jwt.sign({}, secret, { 
      expiresIn,
     });

    return response.status(200).json({user, token});
  };
};