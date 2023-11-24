import { Request, Response } from "express";
import { User } from "../Models/User.schema";

export class UserController {
    async addUser(req: Request, res: Response) {
        try {
            const result = await User.create({
                name: req.body?.name,
                email: req.body?.email,
                phoneNumber: req?.body?.phoneNumber,
                gender: req?.body?.gender,
                dateOfBirth: req?.body?.dateOfBirth
            });
            return result;
        } catch (err) {
            throw(err);
        }
    }
}