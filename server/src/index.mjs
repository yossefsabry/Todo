import express from "express";
import initApp from "./routes/index.mjs";

const app = express();
const port = 3000;

initApp(express, app);
app.listen(port, () => {
  console.log("Server is running on port 3000");
});
