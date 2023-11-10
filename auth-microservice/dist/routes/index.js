"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const utility_1 = require("../shared/utility");
const Login_schema_1 = require("../validators/Login.schema");
const requestValidator_middleware_1 = require("../shared/middlewares/requestValidator.middleware");
const router = express_1.default.Router();
/* GET home page. */
router.post('/', [requestValidator_middleware_1.ValidateRequest.validate(Login_schema_1.LoginSchema)], function (req, res, next) {
    res.status(200).json((0, utility_1.getFormattedResponse)({ result: { title: 'Express JS' } }));
});
module.exports = router;
