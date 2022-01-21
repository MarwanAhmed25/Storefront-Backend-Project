"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = require("../users");
var user = new users_1.User();
describe('Tests for User model', function () {
    it('test to index be define', function () {
        expect(user.index()).toBeDefined();
    });
});
