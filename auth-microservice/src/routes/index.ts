import express from 'express';
import { getFormattedResponse } from '../shared/utility';
import { LoginSchema } from '../validators/Login.schema';
import { ValidateRequest } from '../shared/middlewares/requestValidator.middleware';
const router = express.Router();

/* GET home page. */
router.post('/', [ValidateRequest.validate(LoginSchema)], function(req: any, res: any, next: any) {
  res.status(200).json(getFormattedResponse({ result: { title: 'Express JS' } }));
});

module.exports = router;
