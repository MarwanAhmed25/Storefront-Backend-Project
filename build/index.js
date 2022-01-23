"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var users_1 = __importDefault(require("./handlars/users"));
var orders_1 = __importDefault(require("./handlars/orders"));
var products_1 = __importDefault(require("./handlars/products"));
var dotenv_1 = __importDefault(require("dotenv"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
//dotenv configrations
dotenv_1.default.config();
//declaration port for server
var port = process.env.port;
//initial the app of the server
var app = (0, express_1.default)();
//usig middel ware cors and body parser
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
//listen to the port to run the server
app.listen(port, function () {
    console.log("server running on port... ".concat(port));
});
//run modules of the project
(0, users_1.default)(app);
(0, orders_1.default)(app);
(0, products_1.default)(app);
exports.default = app;
