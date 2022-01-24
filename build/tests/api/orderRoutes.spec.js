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
var orders_1 = require("../../models/orders");
var products_1 = require("../../models/products");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var secret = process.env.token;
var api = (0, supertest_1.default)(index_1.default);
var user_ = new users_1.User();
var order_ = new orders_1.Order();
var product_ = new products_1.Product();
var token;
var permession;
describe('orders handlars api test', function () {
    it('orders index route', function () { return __awaiter(void 0, void 0, void 0, function () {
        var u, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    u = {
                        id: 1,
                        first_name: 'maro',
                        last_name: 'nnn',
                        password: '123'
                    };
                    return [4 /*yield*/, user_.create(u)];
                case 1:
                    token = _a.sent();
                    return [4 /*yield*/, api.get('/users/1/orders')];
                case 2:
                    res = _a.sent();
                    expect(res.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it('orders show route', function () { return __awaiter(void 0, void 0, void 0, function () {
        var o, res1, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    o = {
                        id: 1,
                        status: 'complete',
                        user_id: 1
                    };
                    return [4 /*yield*/, order_.create(o)];
                case 1:
                    res1 = _a.sent();
                    return [4 /*yield*/, api.get('/users/1/orders/1')];
                case 2:
                    res = _a.sent();
                    expect(res.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    //status
    it('orders create route', function () { return __awaiter(void 0, void 0, void 0, function () {
        var d, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    permession = jsonwebtoken_1.default.sign({ user: token }, secret);
                    d = {
                        'status': 'open',
                        'token': permession
                    };
                    return [4 /*yield*/, api.post('/users/1/orders').send(d)];
                case 1:
                    res = _a.sent();
                    expect(res.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    //status
    it('orders update route', function () { return __awaiter(void 0, void 0, void 0, function () {
        var d, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    d = {
                        'status': 'compete',
                        'token': permession
                    };
                    return [4 /*yield*/, api.patch('/users/1/orders/1').send(d)];
                case 1:
                    res = _a.sent();
                    expect(res.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    //product_id, quantity
    it('orders add product route test', function () { return __awaiter(void 0, void 0, void 0, function () {
        var p, res1, d, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    p = {
                        id: 1,
                        name: 'mobile',
                        price: 55,
                        category: 'none'
                    };
                    return [4 /*yield*/, product_.create(p)];
                case 1:
                    res1 = _a.sent();
                    d = {
                        'product_id': 1,
                        'quantity': 5,
                        'token': permession
                    };
                    return [4 /*yield*/, api.post('/users/1/orders/1/products').send(d)];
                case 2:
                    res = _a.sent();
                    expect(res.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it('oreders delete route', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.delete('/users/1/orders/1').send({ 'token': permession })];
                case 1:
                    res = _a.sent();
                    expect(res.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
