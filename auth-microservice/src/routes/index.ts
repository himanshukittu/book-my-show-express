import express, { Request, Response } from 'express';
import { getFormattedResponse } from '../shared/utility';
import { LoginSchema, SignupSchema } from '../validators/auth.schema';
import { ValidateRequest } from '../shared/middlewares/requestValidator.middleware';
import { UserController } from '../Services/User.service';
import createHttpError from 'http-errors';
import { COMMON_ERROR, USER_ALREADY_PRESENT } from '../shared/constants';
const router = express.Router();

const thisUser = new UserController();
router.post('/login', [ValidateRequest.validate(LoginSchema)], function (req: any, res: any, next: any) {
  res.status(200).json(getFormattedResponse({ result: { title: 'Express JS' } }));
});

router.post('/signup', [ValidateRequest.validate(SignupSchema)], async function (req: Request, res: Response, next: any): Promise<any> {
  try {
    const result = await thisUser.addUser(req, res);
    res.status(201).send(getFormattedResponse({ result }));
  } catch (err: any) {
    if (err?.errors[0]?.type === 'unique violation') {
      err = getFormattedResponse({ errorMessage: USER_ALREADY_PRESENT });
      next(createHttpError(400, USER_ALREADY_PRESENT, getFormattedResponse({ errorMessage: USER_ALREADY_PRESENT })));
    } else {
      next(createHttpError(500,  err?.errors[0]?.message || COMMON_ERROR, getFormattedResponse({ stacktrace: err })))
    }
  }
});

module.exports = router;
