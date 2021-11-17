"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
exports.userRouter = (0, express_1.Router)();
const user_1 = require("../controllers/user");
exports.userRouter.get('/users', user_1.getUsers);
