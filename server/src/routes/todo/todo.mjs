import { Router } from "express";
import * as todoController from "./controller/todo.mjs";
import isAuth from "../../utils/authentication.mjs";
// @ts-ignore error from ts
import { checkSchema } from "express-validator";
import {updateTodoSchema, createTodoSchema , operationTodoId
    ,todoGroupAdding
} from "./validTodo.mjs";

const todoRouter = Router();

todoRouter.get("/", (_, res) => {
    res.send("Hello World");
});

todoRouter.get("/get-todos"    ,isAuth, 
    todoController.allTodos
);
todoRouter.get("/searchTodo/:search"     ,isAuth, 
    todoController.searchTodos
);
//todoRouter.get("/searchGroup/:groupId"    ,isAuth, todoController.groudTodos);
todoRouter.post("/createTodo" ,isAuth, checkSchema(createTodoSchema),
    todoController.createTodo
);
todoRouter.post("/isFavorite" ,isAuth, checkSchema(operationTodoId),
    todoController.isFavorite 
);
todoRouter.post("/isComplate" ,isAuth, checkSchema(operationTodoId),
    todoController.isComplate 
);
todoRouter.post("/deleteTodo" ,isAuth, 
    checkSchema(operationTodoId), todoController.deleteTodo 
);
todoRouter.patch("/updateTodo" ,isAuth, 
    checkSchema(updateTodoSchema), todoController.updateTodo
);

todoRouter.post("/addingTodoGroup", isAuth,
    checkSchema(todoGroupAdding), todoController.addingTodoGroup
);


export default todoRouter;
