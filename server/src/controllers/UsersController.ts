import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import db from '../database/connection';

export default class UsersController {
  public async create(request: Request, response: Response) {
    let { name, surname, email, password } = request.body;

    const verifyEmailExistArray = await db('register_users')
      .select()
      .where('register_users.email', '=', email);

    const verifyEmail = verifyEmailExistArray[0];

    if(verifyEmail) return response.status(401).json({msg: 'Email already exists, try other.'});

    const passwordHash = await bcrypt.hash(password, 8);

    password = passwordHash;

    try {
      await db('register_users').insert({
        name,
        surname,
        email,
        password,
      });
  
      return response.status(201).send();
    } catch(err) {
      return response.status(400).json({
        error: `Occur one error in database while create user, ${err}`
      });
    }
  };
};