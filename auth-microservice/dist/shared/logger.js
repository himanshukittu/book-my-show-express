"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const npmlog_1 = __importDefault(require("npmlog"));
class Logger {
    static log(logType, prefix, message, otherArgs = []) {
        npmlog_1.default[logType](prefix, message, ...otherArgs);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map