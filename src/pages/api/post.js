import * as fs from "fs";

export default async function handler(req, res) {
  await fs.promises
    .readFile("backend/posts/" + req.query.id + ".json", "utf-8")
    .then((blog) => {
      res.status(200).json(JSON.parse(blog));
    })
    .catch(() => {
      res.status(404).json(JSON.parse(`[{"error":${true}}]`));
    });
}
