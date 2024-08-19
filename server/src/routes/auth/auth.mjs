import { Router } from "express";
import * as controller from "./controller/auth.mjs";
// @ts-ignore
import { checkSchema } from "express-validator";
import { vaildatorRegisetr, vaildatorSign } from "./validAuth.mjs";
import isAuth from "../../utils/authentication.mjs";

const authRouter = Router();

authRouter.get("/",isAuth, (req,res) => {
    res.status(200).json({ message: "you are authenticated", status: 200, color: "green"});
});

authRouter.post("/sign",checkSchema(vaildatorSign), controller.sign);
authRouter.post("/register",checkSchema(vaildatorRegisetr), controller.register);

export default authRouter;

