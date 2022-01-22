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
exports.User = void 0;
var database_1 = __importDefault(require("../database"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var _a = process.env, extra = _a.extra, round = _a.round;
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.index = function () {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sql, res, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        sql = 'select * from users;';
                        return [4 /*yield*/, conn.query(sql)];
                    case 2:
                        res = _a.sent();
                        conn.release();
                        return [2 /*return*/, res.rows];
                    case 3:
                        e_1 = _a.sent();
                        throw new Error("".concat(e_1));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    User.prototype.show = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sql, res, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        sql = 'select id,first_name,last_name from users where id =($1);';
                        return [4 /*yield*/, conn.query(sql, [id])];
                    case 2:
                        res = _a.sent();
                        conn.release();
                        return [2 /*return*/, res.rows[0]];
                    case 3:
                        e_2 = _a.sent();
                        throw new Error("".concat(e_2));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    User.prototype.create = function (u) {
        return __awaiter(this, void 0, void 0, function () {
            var hash, conn, sql, res, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hash = bcrypt_1.default.hashSync(u.password + extra, parseInt(round));
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 2:
                        conn = _a.sent();
                        sql = 'insert into users (first_name, last_name, password) values($1,$2,$3);';
                        return [4 /*yield*/, conn.query(sql, [
                                u.first_name,
                                u.last_name,
                                hash
                            ])];
                    case 3:
                        res = _a.sent();
                        conn.release();
                        return [2 /*return*/, 'created'];
                    case 4:
                        e_3 = _a.sent();
                        throw new Error("".concat(e_3));
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    User.prototype.update = function (u) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sql, res, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        sql = 'update users set first_name=($1), last_name=($2) where id=($3) ; ';
                        return [4 /*yield*/, conn.query(sql, [u.first_name, u.last_name, u.id])];
                    case 2:
                        res = _a.sent();
                        conn.release();
                        return [2 /*return*/, 'updated'];
                    case 3:
                        e_4 = _a.sent();
                        throw new Error("".concat(e_4));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    User.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sql, res, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        sql = 'delete from users where id =($1) ;';
                        return [4 /*yield*/, conn.query(sql, [id])];
                    case 2:
                        res = _a.sent();
                        conn.release();
                        return [2 /*return*/, 'deleted'];
                    case 3:
                        e_5 = _a.sent();
                        throw new Error("".concat(e_5));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    User.prototype.auth = function (username, pass) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sql, res, isExist, e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        sql = 'select * from users where first_name=($1);';
                        return [4 /*yield*/, conn.query(sql, [username])];
                    case 2:
                        res = _a.sent();
                        if (res.rows.length) {
                            isExist = bcrypt_1.default.compareSync(pass + extra, res.rows[0].password);
                            if (isExist)
                                return [2 /*return*/, 'succeed'];
                        }
                        return [2 /*return*/, 'fsild'];
                    case 3:
                        e_6 = _a.sent();
                        throw new Error("".concat(e_6));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return User;
}());
exports.User = User;
