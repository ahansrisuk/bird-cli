import fs from "fs";
import path from "path";

function generate() {
  let result = fs.readFileSync(path.resolve(__dirname, "../document.json"));

  let document = JSON.parse(result);

  console.log(document.assets.colorAssets);
}

export default generate;
