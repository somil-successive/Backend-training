import express from "express";
import { data } from "./mockData.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());

app.get("/", function (req, res) {
  res.send(data);
});

app.listen(4000, () => {
  console.log("serveris running at port 4000");
});
