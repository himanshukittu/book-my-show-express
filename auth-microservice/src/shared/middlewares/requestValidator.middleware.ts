import { pick } from 'lodash';
import Express from 'express';
import Joi from 'joi';
import createHttpError from 'http-errors';

export class ValidateRequest {
   static validate(RefSchema: Joi.ObjectSchema<any>) {
    return async (req: Express.Request, res: Express.Response, next: any) => {
        const keysToPick = Object.keys(RefSchema.describe().keys);
        const finalReqBody = pick(req.body, keysToPick);
        try {
            await RefSchema.validateAsync(finalReqBody);
            req.body = finalReqBody;
            next();
        } catch(err: any) {
            const finalErr = (err?.details || []).map((ele: any): string => ele?.message || '')?.join('\n');
            next(createHttpError.BadRequest(finalErr))
        }
    }
   }
}