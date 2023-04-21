// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { data } from "autoprefixer";
// import { data } from "autoprefixer";
import * as fs from "fs";

export default async function handler(req, res) {
  let datas = {};
  await fs.promises.readFile("backend/blogs.json", "utf-8").then((data) => {
    // console.log(data);
    // console.log("----------------------");
    res.status(200).json(JSON.parse(data));
    // datas.push(data);
  });
  //   console.log(datas);
  //   res.status(404).json({ name: "John Doe" });
}
