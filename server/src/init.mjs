import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";
import cors from "cors";
import  globalErrorHandling  from './utils/globalErrorHandle.mjs';
import connectDB from './DB/connect.mjs';
import authRouter from './routes/auth/auth.mjs';
import todoRouter from './routes/todo/todo.mjs';
import groupsRouter from './routes/groups/gourps.mjs';
import compression from "compression";
import userRouter from './routes/user/user.mjs';

/** 
@param {import('express').Express} app
@param {import('express')} express
*/
const init = (express ,app) => {
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(express.json());
    app.use(cookieParser());
    app.use(cors());
    app.use(compression({ // for compressing the response
        level: 6,
        threshold: 0,
        filter: (req, res) => {
            if (req.headers['x-no-compression']) {
                return false;
            }
            return compression.filter(req, res);
        }
    }));

    /* setting the connection for db*/
    /** @type {string} */
    const url = process.env.URL_DB || "mongodb://localhost:27017/test";
    connectDB(app,url);

    app.get("/", (_, res) => {
        res.status(200).json({ massage: "welcome from yossef" });
    });

    app.use("/api/auth", authRouter);
    app.use("/api/todo", todoRouter);
    app.use("/api/group", groupsRouter);
    app.use("/api/user", userRouter);

    app.use(globalErrorHandling);
};

export default init;
