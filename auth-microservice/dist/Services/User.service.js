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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const User_schema_1 = require("../Models/User.schema");
class UserController {
    addUser(req, res) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield User_schema_1.User.create({
                    name: (_a = req.body) === null || _a === void 0 ? void 0 : _a.name,
                    email: (_b = req.body) === null || _b === void 0 ? void 0 : _b.email,
                    phoneNumber: (_c = req === null || req === void 0 ? void 0 : req.body) === null || _c === void 0 ? void 0 : _c.phoneNumber,
                    gender: (_d = req === null || req === void 0 ? void 0 : req.body) === null || _d === void 0 ? void 0 : _d.gender,
                    dateOfBirth: (_e = req === null || req === void 0 ? void 0 : req.body) === null || _e === void 0 ? void 0 : _e.dateOfBirth
                });
                return result;
            }
            catch (err) {
                throw (err);
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=User.service.js.map