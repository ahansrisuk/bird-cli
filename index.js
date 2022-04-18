#!/user/bin/env node

import { Command } from "commander";

const program = new Command();

program.name("bird")
  .description("Helpful tools")
  .usage("<command>");

console.log(process.argv)


program.command("hello")
  .action(() => console.log("Hello World"))

program.parse();