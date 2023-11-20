import express from "express";
import dataRoutes from "./routes/dataRoutes.js";
import fs from "fs";
const app = express();
app.use(express.json());

app.post("/api", function (req, res) {
  console.log(req.body);
  const { name } = req.body;
  console.log(typeof name);
  fs.appendFile("./src/utils/dataSeeder.js", name, (err) => {
    console.log(err);
  });
  res.json(req.body);
});

app.use("/data", dataRoutes);

app.listen(4000, () => {
  console.log("serveris running at port 4000");
});
