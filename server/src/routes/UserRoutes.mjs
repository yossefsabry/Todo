import { Router } from "express"
import { checkSchema, validationResult } from "express-validator";
import { vaildatorRegister, vaildatorSign } from "../uilts/vaildatorSchemes.mjs";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send("user get requests");
});

userRouter.post("/sign", checkSchema(vaildatorSign), (req, res) => {
  const results = validationResult(req);
  console.log(results);
  if (!results.isEmpty()) {
    return res.status(400).send({ error: Array(results.array()) });
  }
  const { username ,  password } = req.query;
  console.log(username, password);
  res.send("user get requests");
});

userRouter.post("/register", checkSchema(vaildatorRegister), (req, res) => {
  const results = validationResult(req);
  console.log(results);
  if (!results.isEmpty()) {
    return res.status(400).send({ error: Array(results.array()) });
  }
  const { username ,  password } = req.query;
  console.log(username, password);
  res.send("user get requests");
});

export default userRouter;



