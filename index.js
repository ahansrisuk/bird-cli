#!/user/bin/env node

import { Command } from "commander";
import generate from "./src/commands/generate.js";

const program = new Command();

program.name("bird").description("Helpful tools").usage("<command>");

console.log(process.argv);

program.command("generate").action(() => generate());

program
  .command("convert")
  .option("-rgb", "converts value to rgb color space")
  .action(() => convert(process.argv[2]));

program.parse();
