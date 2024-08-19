import session from "express-session";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";

/** connect to db and set up the session
@param {import("express").Express} app - an express instance
@param {string} url - an URL to connect db in mongoose atlas
*/
const connectDB = async (app, url) => {

    /* set up the connect for the db */
    mongoose.connect(url, {})
        .catch((err) => {
            console.log(err);
        });;

    /** @type {mongoose.Connection} */
    let db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function() {
        console.log("Connected to DB");
    });

    /* set up the session for the app */
    app.use(session({
        secret: process.env.SECRET_KEY || "yossef sabry secret key",
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            client: mongoose.connection.getClient(),
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24, // 1 day
        },
    }));
};

export default connectDB;
