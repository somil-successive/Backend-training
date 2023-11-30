import express from "express";
import { data } from "./mockData.js";
import cookieParser from "cookie-parser";

const port=4000;
const app = express();
app.use(cookieParser());

app.get("/", function (req, res) {
  res.send(data);
});

app.listen({port}, () => {
  console.log(`server is running at port ${port}`);
});
