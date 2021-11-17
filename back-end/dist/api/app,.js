"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("../api/routes");
exports.app = (0, express_1.default)();
exports.app.use(body_parser_1.default.json());
exports.app.use((0, cors_1.default)());
exports.app.use(routes_1.userRouter);
