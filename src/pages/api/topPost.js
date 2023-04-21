import * as fs from "fs";

export default async function handler(req, res) {
  let allposts = await fs.promises.readFile("backend/blogs.json", "utf-8");
  allposts = await JSON.parse(allposts);
  res.status(200).json(allposts.slice(0, 3));
}
