import express from "express";
import initApp from "./routes/index.mjs";
import dotenv from "dotenv";
import path from 'path'
import {fileURLToPath} from 'url'

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url)) // ge tthe current directory name
dotenv.config({path:path.join(__dirname,'../config/.env')}); 
const port = process.env.PORT || 3000;

initApp(express, app);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
