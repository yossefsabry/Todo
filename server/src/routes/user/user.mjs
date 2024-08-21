import { Router } from "express";
import * as userController from "./controller/user.mjs";
import isAuth from "../../utils/authentication.mjs";
import { fileUpload } from "../../service/multer.mjs";
const userRouter = Router();

userRouter.get("/",isAuth, (req, res) => {
    res.status(200).json({ massage: "welcome from yossef" });
});
userRouter.get("/:userId",isAuth, userController.userInfo);
// @ts-ignore
userRouter.post("/changeProfileImage",isAuth, fileUpload({ maxSize: 5 }).single('image'), userController.changeProfileImage);

export default userRouter;
