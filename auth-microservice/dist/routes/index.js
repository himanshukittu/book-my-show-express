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
const express_1 = __importDefault(require("express"));
const utility_1 = require("../shared/utility");
const auth_schema_1 = require("../validators/auth.schema");
const requestValidator_middleware_1 = require("../shared/middlewares/requestValidator.middleware");
const User_service_1 = require("../Services/User.service");
const http_errors_1 = __importDefault(require("http-errors"));
const constants_1 = require("../shared/constants");
const router = express_1.default.Router();
const thisUser = new User_service_1.UserController();
router.post('/login', [requestValidator_middleware_1.ValidateRequest.validate(auth_schema_1.LoginSchema)], function (req, res, next) {
    res.status(200).json((0, utility_1.getFormattedResponse)({ result: { title: 'Express JS' } }));
});
router.post('/signup', [requestValidator_middleware_1.ValidateRequest.validate(auth_schema_1.SignupSchema)], function (req, res, next) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield thisUser.addUser(req, res);
            res.status(201).send((0, utility_1.getFormattedResponse)({ result }));
        }
        catch (err) {
            if (((_a = err === null || err === void 0 ? void 0 : err.errors[0]) === null || _a === void 0 ? void 0 : _a.type) === 'unique violation') {
                err = (0, utility_1.getFormattedResponse)({ errorMessage: constants_1.USER_ALREADY_PRESENT });
                next((0, http_errors_1.default)(400, constants_1.USER_ALREADY_PRESENT, (0, utility_1.getFormattedResponse)({ errorMessage: constants_1.USER_ALREADY_PRESENT })));
            }
            else {
                next((0, http_errors_1.default)(500, ((_b = err === null || err === void 0 ? void 0 : err.errors[0]) === null || _b === void 0 ? void 0 : _b.message) || constants_1.COMMON_ERROR, (0, utility_1.getFormattedResponse)({ stacktrace: err })));
            }
        }
    });
});
module.exports = router;
//# sourceMappingURL=index.js.map