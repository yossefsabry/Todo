import { Router } from "express";
import isAuth from "../../utils/authentication.mjs";
import * as groupsController from "./controller/groups.mjs";
const groupsRouter = Router();

groupsRouter.get("/",isAuth, (req, res) => {
    res.status(200).json({ message: "welcome from groups" });
});

groupsRouter.get("/tasks", isAuth, groupsController.groupTask)



export default groupsRouter;

