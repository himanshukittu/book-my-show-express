import { Sequelize } from "sequelize-typescript";
import { Logger } from "../shared/logger";
import { User } from "./User.schema";

const sequelize = new Sequelize({
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'auth',
    dialect: 'postgres',
    logging: (sql, timing): any => {
        Logger.log('info', sql, '[SQL Query]\n\n')
    },
    pool: {
        idle: 10000,
        acquire: 5000,
        max: 6,
    },
    models: [User]
});

sequelize.authenticate().then(():any => {
    Logger.log('http', Date.now().toString(), 'DB Connected')
}).catch((err: any): any => {
    Logger.log('error', JSON.stringify(err), 'DB Connection failed!');
})

export default sequelize;
