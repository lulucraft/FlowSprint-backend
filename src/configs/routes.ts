import { Express } from 'express';
import apiRoutes from '@controllers/api/IndexController';
import usersRoutes from '@routes/api/users';

const registerRoutes = (app: Express) => {
    app.use('/api', apiRoutes);
    app.use('/api/users', usersRoutes);
};

export default registerRoutes;