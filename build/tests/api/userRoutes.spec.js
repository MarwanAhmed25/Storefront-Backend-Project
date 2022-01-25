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
var supertest_1 = __importDefault(require("supertest"));
var index_1 = __importDefault(require("../../index"));
var users_1 = require("../../models/users");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var secret = process.env.token;
var user_ = new users_1.User();
var api = (0, supertest_1.default)(index_1.default);
var token;
describe('users handlars api test', function () {
    it('users index route', function () { return __awaiter(void 0, void 0, void 0, function () {
        var u, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    u = {
                        id: 1,
                        first_name: 'maro',
                        last_name: 'nnn',
                        password: '$2b$05$N3b8OrzeaE2E/Kwqu1PCH.Zdy9wNEwPUD3TY9RtZXZX6gGjATSYUu'
                    };
                    token = jsonwebtoken_1.default.sign({ user: u }, secret);
                    return [4 /*yield*/, api.get('/users').send({ 'token': token })];
                case 1:
                    res = _a.sent();
                    expect(res.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it('users show route', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get('/users/1').send({ 'token': token })];
                case 1:
                    res = _a.sent();
                    expect(res.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it('users create route', function () { return __awaiter(void 0, void 0, void 0, function () {
        var d, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    d = {
                        'first_name': 'marwan',
                        'last_name': 'ahmed',
                        'password': 'marwan'
                    };
                    return [4 /*yield*/, api.post('/users').send(d)];
                case 1:
                    res = _a.sent();
                    token = jsonwebtoken_1.default.sign({ user: res }, secret);
                    expect(res.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it('users update route', function () { return __awaiter(void 0, void 0, void 0, function () {
        var d, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    d = {
                        'first_name': 'bassam',
                        'last_name': 'ahmed',
                        'token': token
                    };
                    return [4 /*yield*/, api.patch('/users/1').send(d)];
                case 1:
                    res = _a.sent();
                    expect(res.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it('users login route', function () { return __awaiter(void 0, void 0, void 0, function () {
        var d, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    d = {
                        'token': token
                    };
                    return [4 /*yield*/, api.post('/login').send(d)];
                case 1:
                    res = _a.sent();
                    expect(res.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it('users get token route', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get('/users/2/get_token').send({ 'token': token })];
                case 1:
                    res = _a.sent();
                    expect(res.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it('users delete route', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.delete('/users/2').send({ 'token': token })];
                case 1:
                    res = _a.sent();
                    expect(res.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
