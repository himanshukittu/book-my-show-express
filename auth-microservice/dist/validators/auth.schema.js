"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignupSchema = exports.LoginSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.LoginSchema = joi_1.default.object({
    userName: joi_1.default.string().required().alphanum(),
    password: joi_1.default.string().required().alphanum()
});
exports.SignupSchema = joi_1.default.object({
    name: joi_1.default.string().regex(/^[A-Za-z ]+$/).required().trim(),
    phoneNumber: joi_1.default.string().required().length(10).regex(/^[6789][0-9]{9}$/).trim(),
    email: joi_1.default.string().email().optional().trim(),
    gender: joi_1.default.string().required().length(1).regex(/[M|F]/).trim(),
    dateOfBirth: joi_1.default.date().required()
});
//# sourceMappingURL=auth.schema.js.map