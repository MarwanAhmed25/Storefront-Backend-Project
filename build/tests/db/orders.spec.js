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
Object.defineProperty(exports, "__esModule", { value: true });
var orders_1 = require("../../models/orders");
var users_1 = require("../../models/users");
var products_1 = require("../../models/products");
var product__ = new products_1.Product();
var order_ = new orders_1.Order();
var user_ = new users_1.User();
var p = {
    id: 1,
    name: '2',
    price: 6,
    category: '2'
};
var u = {
    id: 1,
    first_name: '22',
    last_name: '55',
    password: 'marwan123'
};
var o = {
    id: 1,
    status: "open",
    user_id: 1
};
describe('Tests for Orders model', function () {
    //index function
    it('test index to be define', function () {
        expect(order_.index).toBeDefined();
    });
    it('test index to equal', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, order_.index(1)];
                case 1:
                    res = _a.sent();
                    expect(res.length).toEqual(2);
                    return [2 /*return*/];
            }
        });
    }); });
    //create function
    it('test create be define', function () {
        expect(order_.create).toBeDefined();
    });
    it('test to create to equal', function () { return __awaiter(void 0, void 0, void 0, function () {
        var o_, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    o_ = {
                        id: 3,
                        status: "open",
                        user_id: 1
                    };
                    return [4 /*yield*/, order_.create(o_)];
                case 1:
                    res = _a.sent();
                    expect(res).toEqual('created');
                    return [2 /*return*/];
            }
        });
    }); });
    //show function
    it('test show be define', function () {
        expect(order_.show).toBeDefined();
    });
    it('test to show to equal', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, order_.show(1, 1)];
                case 1:
                    res = _a.sent();
                    expect(res.id).toEqual(1);
                    return [2 /*return*/];
            }
        });
    }); });
    //update function
    it('test update be define', function () {
        expect(order_.update).toBeDefined();
    });
    it('test to update to equal', function () { return __awaiter(void 0, void 0, void 0, function () {
        var o_, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    o_ = {
                        id: 2,
                        status: "complete",
                        user_id: 1
                    };
                    return [4 /*yield*/, order_.update(o_)];
                case 1:
                    res = _a.sent();
                    expect(res).toEqual('updated');
                    return [2 /*return*/];
            }
        });
    }); });
    //delete function
    it('test delete be define', function () {
        expect(order_.delete).toBeDefined();
    });
    it('test delete to equal', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, order_.delete(2, 1)];
                case 1:
                    res = _a.sent();
                    expect(res).toEqual('deleted');
                    return [2 /*return*/];
            }
        });
    }); });
    //add product
    it('test add product be define', function () {
        expect(order_.addProduct).toBeDefined();
    });
    it('test add product to equal', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, order_.addProduct(1, 1, 5)];
                case 1:
                    res = _a.sent();
                    expect(res).toEqual('added');
                    return [2 /*return*/];
            }
        });
    }); });
});
