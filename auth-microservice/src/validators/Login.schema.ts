import Joi from "joi";

export const LoginSchema: Joi.ObjectSchema<any> = Joi.object({
    userName: Joi.string().required().alphanum(),
    password: Joi.string().required().alphanum()
})