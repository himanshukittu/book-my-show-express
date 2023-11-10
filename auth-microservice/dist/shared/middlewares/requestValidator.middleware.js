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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateRequest = void 0;
const lodash_1 = require("lodash");
const http_errors_1 = __importDefault(require("http-errors"));
class ValidateRequest {
    static validate(RefSchema) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const keysToPick = Object.keys(RefSchema.describe().keys);
            const finalReqBody = (0, lodash_1.pick)(req.body, keysToPick);
            try {
                yield RefSchema.validateAsync(finalReqBody);
                req.body = finalReqBody;
                next();
            }
            catch (err) {
                const finalErr = (_a = ((err === null || err === void 0 ? void 0 : err.details) || []).map((ele) => (ele === null || ele === void 0 ? void 0 : ele.message) || '')) === null || _a === void 0 ? void 0 : _a.join('\n');
                next(http_errors_1.default.BadRequest(finalErr));
            }
        });
    }
}
exports.ValidateRequest = ValidateRequest;
