"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const logger_1 = require("../shared/logger");
const User_schema_1 = require("./User.schema");
const sequelize = new sequelize_typescript_1.Sequelize({
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'auth',
    dialect: 'postgres',
    logging: (sql, timing) => {
        logger_1.Logger.log('info', sql, '[SQL Query]\n\n');
    },
    pool: {
        idle: 10000,
        acquire: 5000,
        max: 6,
    },
    models: [User_schema_1.User]
});
sequelize.authenticate().then(() => {
    logger_1.Logger.log('http', Date.now().toString(), 'DB Connected');
}).catch((err) => {
    logger_1.Logger.log('error', JSON.stringify(err), 'DB Connection failed!');
});
exports.default = sequelize;
//# sourceMappingURL=index.js.map