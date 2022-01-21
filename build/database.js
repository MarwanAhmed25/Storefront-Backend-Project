"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var _a = process.env, db_host = _a.db_host, db_user = _a.db_user, db_password = _a.db_password, db_name = _a.db_name, env = _a.env, db_name_test = _a.db_name_test;
var db;
if (env == 'test') {
    db = db_name_test;
}
else {
    db = db_name;
}
var Client = new pg_1.Pool({
    host: db_host,
    database: db,
    user: db_user,
    password: db_password
});
exports.default = Client;
