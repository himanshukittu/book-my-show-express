import Joi from "joi";

export const LoginSchema: Joi.ObjectSchema<any> = Joi.object({
    userName: Joi.string().required().alphanum(),
    password: Joi.string().required().alphanum()
})

export const SignupSchema: Joi.ObjectSchema<any> = Joi.object({
    name: Joi.string().regex(/^[A-Za-z ]+$/).required().trim(),
    phoneNumber: Joi.string().required().length(10).regex(/^[6789][0-9]{9}$/).trim(),
    email: Joi.string().email().optional().trim(),
    gender: Joi.string().required().length(1).regex(/[M|F]/).trim(),
    dateOfBirth: Joi.date().required()
});