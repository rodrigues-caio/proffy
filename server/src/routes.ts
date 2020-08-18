import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import UsersController from './controllers/UsersController';
import SessionController from './controllers/SessionController';

import Authorizarion from './middleware/authorization';

const routes = express.Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();
const usersController = new UsersController();
const sessionController = new SessionController();

routes.post('/users/register', usersController.create);
routes.post('/users/login', sessionController.login);

routes.get('/dashboard', Authorizarion ,(request, response) => {
  return response.json({ message: 'This is dashboard. Do you have a token?' });
});

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;

