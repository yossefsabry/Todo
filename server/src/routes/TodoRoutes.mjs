import { Router } from "express"

const todoRouter = Router();


todoRouter.get("/" , (req, res) => {
  res.send("todo get requests");
});

export default todoRouter;

