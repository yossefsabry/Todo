import { Router } from "express";
import * as todoController from "./controller/todo.mjs";
import isAuth from "../../utils/authentication.mjs";
// @ts-ignore error from ts
import { checkSchema } from "express-validator";
import { createTodoSchema , operationTodoId} from "./validTodo.mjs";

const todoRouter = Router();

todoRouter.get("/", (_, res) => {
    res.send("Hello World");
});

todoRouter.get("/get-todos"    ,isAuth, todoController.allTodos);
todoRouter.post("/createTodo" ,isAuth, checkSchema(createTodoSchema), todoController.createTodo);
todoRouter.post("/deleteTodo" ,isAuth, checkSchema(operationTodoId), todoController.deletePost );
todoRouter.post("/isFavorite" ,isAuth, checkSchema(operationTodoId), todoController.isFavorite );
todoRouter.post("/isComplate" ,isAuth, checkSchema(operationTodoId), todoController.isComplate );
todoRouter.post("/:search"     ,isAuth, todoController.searchTodos);
todoRouter.post("/:groupId"    ,isAuth, todoController.groudTodos);


export default todoRouter;
