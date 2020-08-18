import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';

async function Authorization(
  request: Request, 
  response: Response, 
  next: NextFunction
  ) {
    const auth = request.headers.authorization;

    if (!auth) {
      return response.json({ message: 'Please, do you need a token for access' });
    };

    const { secret } = authConfig.jwt;

    try {
      const [, token] = auth.split(' ');

      verify(token, secret);
  
      next();
    } catch(err) {
      return response.send('Your token expired');
    };
};

export default Authorization;