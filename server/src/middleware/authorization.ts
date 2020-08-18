import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

async function Authorization(
  request: Request, 
  response: Response, 
  next: NextFunction
  ) {
    const auth = request.headers.authorization;

    if (!auth) {
      return response.json({ message: 'Please, do you need a token for access' });
    }

    try {
      const [, token] = auth.split(' ');

      verify(token, 'haushaushaus');
  
      next();
    } catch(err) {
      return response.send('Your token expired');
    };
};

export default Authorization;