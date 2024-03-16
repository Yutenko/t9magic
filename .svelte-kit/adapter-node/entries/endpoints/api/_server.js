import { j as json } from "../../../chunks/index.js";
import path from "path";
import { mkdirp } from "mkdirp";
import fs from "fs";
import { readFile } from "fs/promises";
async function GET({ url }) {
  const code = Number(url.searchParams.get("code") ?? "0");
  if (code) {
    const filepath2 = path.join(
      process.cwd(),
      "static",
      "uploads",
      `${code}.json`
    );
    const data = await readFile(filepath2, { encoding: "utf8" });
    return json(JSON.parse(data));
  }
  const filepath = path.join(
    process.cwd(),
    "static",
    "uploads"
  );
  const filenames = await fs.promises.readdir(filepath);
  let codes = [];
  filenames.forEach((file) => {
    codes.push(path.parse(file).name);
  });
  return json({ codes });
}
async function POST({ request }) {
  const body = await request.json();
  if (body.code) {
    const filepath = path.join(
      process.cwd(),
      "static",
      "uploads",
      `${body.code}.json`
    );
    mkdirp.sync(path.dirname(filepath));
    const data = JSON.stringify({ t9: body.t9, time: (/* @__PURE__ */ new Date()).getTime() });
    fs.writeFileSync(filepath, data);
  }
  return json({ msg: "OK" });
}
export {
  GET,
  POST
};
