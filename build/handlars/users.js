"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = require("../models/users");
var bcrypt_1 = __importDefault(require("bcrypt"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var secret = process.env.token;
var user_obj = new users_1.User();
function index(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var token, permession, resault, e_1, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    token = req.headers.token;
                    permession = jsonwebtoken_1.default.verify(token, secret);
                    if (!permession) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, user_obj.index()];
                case 2:
                    resault = _a.sent();
                    res.status(200).json(resault);
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    res.status(400).json("".concat(e_1));
                    return [3 /*break*/, 4];
                case 4: return [3 /*break*/, 6];
                case 5:
                    res.send('Not allowed login first!!');
                    _a.label = 6;
                case 6: return [3 /*break*/, 8];
                case 7:
                    e_2 = _a.sent();
                    res.status(400).send("".concat(e_2));
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
function show(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var token, permession, resault, e_3, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    token = req.headers.token;
                    permession = jsonwebtoken_1.default.verify(token, secret);
                    if (!permession) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, user_obj.show(parseInt(req.params.id))];
                case 2:
                    resault = _a.sent();
                    res.status(200).json(resault);
                    return [3 /*break*/, 4];
                case 3:
                    e_3 = _a.sent();
                    res.status(400).json("".concat(e_3));
                    return [3 /*break*/, 4];
                case 4: return [3 /*break*/, 6];
                case 5:
                    res.send('Not allowed login first!!');
                    _a.label = 6;
                case 6: return [3 /*break*/, 8];
                case 7:
                    e_4 = _a.sent();
                    res.status(400).send("".concat(e_4));
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
function update(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var token, permession, u, resault, newToken, e_5, e_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    token = req.body.token;
                    permession = jsonwebtoken_1.default.verify(token, secret);
                    if (!permession) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    u = {
                        id: req.params.id,
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        password: ''
                    };
                    return [4 /*yield*/, user_obj.update(u)];
                case 2:
                    resault = _a.sent();
                    newToken = jsonwebtoken_1.default.sign({ user: resault }, secret);
                    res.status(200).json(newToken);
                    return [3 /*break*/, 4];
                case 3:
                    e_5 = _a.sent();
                    res.status(400).json("".concat(e_5));
                    return [3 /*break*/, 4];
                case 4: return [3 /*break*/, 6];
                case 5:
                    res.send('Not allowed login first!!');
                    _a.label = 6;
                case 6: return [3 /*break*/, 8];
                case 7:
                    e_6 = _a.sent();
                    res.status(400).send("".concat(e_6));
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
function create(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var hash, u, resault, token, e_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    hash = bcrypt_1.default.hashSync(req.body.password + process.env.extra, parseInt(process.env.round));
                    u = {
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        password: hash,
                    };
                    return [4 /*yield*/, user_obj.create(u)];
                case 1:
                    resault = _a.sent();
                    token = jsonwebtoken_1.default.sign({ user: resault }, secret);
                    res.status(200).json(token);
                    return [3 /*break*/, 3];
                case 2:
                    e_7 = _a.sent();
                    res.status(400).json("".concat(e_7));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function delete_(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var token, permession, resault, e_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = req.body.token;
                    permession = jsonwebtoken_1.default.verify(token, secret);
                    if (!permession) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, user_obj.delete(parseInt(req.params.id))];
                case 2:
                    resault = _a.sent();
                    res.status(200).json(resault);
                    return [3 /*break*/, 4];
                case 3:
                    e_8 = _a.sent();
                    res.status(400).json("".concat(e_8));
                    return [3 /*break*/, 4];
                case 4: return [3 /*break*/, 6];
                case 5:
                    res.send('Not allowed login first!!');
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    });
}
function login(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, username, password, resault, e_9;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, username = _a.username, password = _a.password;
                    return [4 /*yield*/, user_obj.auth(username, password)];
                case 1:
                    resault = _b.sent();
                    if (resault != null)
                        res.status(200).send('succeed');
                    else
                        res.status(400).send('faild');
                    return [3 /*break*/, 3];
                case 2:
                    e_9 = _b.sent();
                    res.status(400).json("".concat(e_9));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function get_token(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var resault, token, e_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, user_obj.show(parseInt(req.params.id))];
                case 1:
                    resault = _a.sent();
                    token = jsonwebtoken_1.default.sign({ user: resault }, secret);
                    res.status(200).json(token);
                    return [3 /*break*/, 3];
                case 2:
                    e_10 = _a.sent();
                    res.status(400).json("".concat(e_10));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function mainRoutes(app) {
    app.post('/login', login);
    app.get('/users', index);
    app.get('/users/:id', show);
    app.post('/users', create);
    app.get('/users/:id/get_token', get_token);
    app.patch('/users/:id', update);
    app.delete('/users/:id', delete_);
}
exports.default = mainRoutes;
