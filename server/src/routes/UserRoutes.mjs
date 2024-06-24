import { Router } from "express"
import { checkSchema, validationResult } from "express-validator";
import { vaildatorSign } from "../uilts/vaildatorSchemes.mjs";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send("user get requests");
});

userRouter.post("/", checkSchema(vaildatorSign), (req, res) => {
  const results = validationResult(req);
  console.log(results);
  if (!results.isEmpty()) {
    return res.status(400).send({ error: results.array() });
  }
  const { username , lastname,  password } = req.query;
  console.log(username, lastname, password);

  res.send("user get requests");
});

export default userRouter;



