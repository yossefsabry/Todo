import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";
import cors from "cors";
import  globalErrorHandling  from './utils/globalErrorHandle.mjs';
import connectDB from './DB/connect.mjs';
import authRouter from './routes/auth/auth.mjs';
import todoRouter from './routes/todo/todo.mjs';
import groupsRouter from './routes/groups/gourps.mjs';

/** 
@param {import('express').Express} app
@param {import('express')} express
*/
const init = (express ,app) => {
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(express.json());
    app.use(cookieParser());
    app.use(cors());

    /* setting the connection for db*/
    /** @type {string} */
    const url = process.env.URL_DB || "mongodb://localhost:27017/test";
    connectDB(app,url);

    app.get("/", (req, res) => {
        res.status(200).json({ massage: "welcome from yossef" });
    });

    app.use("/api/auth", authRouter);
    app.use("/api/todo", todoRouter);
    app.use("/api/groups", groupsRouter);

    app.use(globalErrorHandling);
};

export default init;
