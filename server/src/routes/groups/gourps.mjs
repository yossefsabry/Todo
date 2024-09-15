import { Router } from "express";
import isAuth from "../../utils/authentication.mjs";
import * as groupsController from "./controller/groups.mjs";
// @ts-ignore
import { checkSchema } from "express-validator";
import { createGroupSchema, userIdSchema , groupIdSchema, 
    updateGroupSchema, userAndGroupId ,groupShareSchema
} from "./validerGroups.mjs";

const groupsRouter = Router();

groupsRouter.get("/",isAuth, (_, res) => {
    res.status(200).json({ message: "welcome from groups" });
});

groupsRouter.get("/tasksGroup", isAuth, 
    checkSchema(userIdSchema), groupsController.groupTask
);
groupsRouter.get("/:groupId", isAuth, groupsController.groupInfo);
groupsRouter.get("/userGroups/:userId", isAuth, groupsController.userGroups);
groupsRouter.get("/publicGroups", isAuth, groupsController.allPublicGroup);
groupsRouter.post("/addingGroup", isAuth, 
    checkSchema(createGroupSchema),  groupsController.addingGroup
);
groupsRouter.patch("/deletingGroup", isAuth, 
    checkSchema(groupIdSchema),  groupsController.deletingGroup
);
groupsRouter.patch("/updatingGroup", isAuth, 
    checkSchema(updateGroupSchema),  groupsController.updatingGroup
);
groupsRouter.patch("/publicGroup", isAuth, 
    checkSchema(userAndGroupId),  groupsController.publicGroup
);
groupsRouter.patch("/privateGroup", isAuth, 
    checkSchema(userAndGroupId),  groupsController.privateGroup
);

groupsRouter.post("/sharingGroups", isAuth, 
    checkSchema(groupShareSchema),  groupsController.shareGroup
);

export default groupsRouter;

