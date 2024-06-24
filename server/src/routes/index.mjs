import cors from "cors"
import AuthRouter from "./AuthRoutes.mjs";
import todoRouter from "./TodoRoutes.mjs";
import userRouter from "./UserRoutes.mjs";


const initApp = (express, app) => {
  
  app.use(express.json());
  app.use(cors());

  app.use("/user", userRouter);
  app.use("/auth", AuthRouter);
  app.use("/todo", todoRouter);
  app.get("/", (req, res) => {
    res.send("hello world");
  });

  // for handle other routers
  app.all("*", (req, res) => {
    return res.status(404).send("are you lost Baby Girl ");
  });
};
export default initApp;
