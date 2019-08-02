import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ hello: 'Hello world' }));

export default routes;
