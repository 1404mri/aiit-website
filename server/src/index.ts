import DB from './bootstrap/db.sql';
import { app_config } from './configs/app.config';
import FastifyApp from './bootstrap/app';

DB.connect()
    .then(async (sequelize_instance: any = {}) => {
        const server = new FastifyApp();
        await server.register(sequelize_instance);
        server.start(app_config.port);
    });
