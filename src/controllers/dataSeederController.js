import allData from "../utils/dataSeeder.json" assert { type: "json" };
import fs from "fs";

export const dataSeederController = (req, res) => {
  const data = req.body;

  allData.push(data);

  fs.writeFileSync(
    "/home/somil.kaushik/backend-training/src/utils/dataSeeder.json",
    JSON.stringify(allData)
  );
  res.json({ message: "data has been seeded in file" });
};
