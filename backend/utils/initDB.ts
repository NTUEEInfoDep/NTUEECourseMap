import { prisma } from "../prisma/client.ts";
import fs from "fs";

const initGroupData = JSON.parse(
  fs.readFileSync("./data/group.json", "utf-8"),
).group;

const initGroupDB = async () => {
  for (let i = 0; i < initGroupData.length; i++) {
    try {
      await prisma.group.create({
        data: {
          name: initGroupData[i].name,
          content: initGroupData[i].content,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
};

initGroupDB();
