import express from "express"
import init from "./src/init.mjs";
import dotenv from "dotenv"

const app = express();
dotenv.config();

/** @type {Number|string} */
const port = process.env.PORT || 3000;
init(express ,app);

app.listen(port, () => {
    console.log("listening to port", port);
});


