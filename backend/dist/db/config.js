"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const st = require('sequelize-typescript');
const Inventory = require("../models/inventory");
require('dotenv').config();
const sequelize = new st.Sequelize({
    dialect: "postgres",
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    storage: process.env.DB_STORAGE,
    models: [Inventory]
});
module.exports = sequelize;
//# sourceMappingURL=config.js.map