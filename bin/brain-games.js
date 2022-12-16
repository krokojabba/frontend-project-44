#!/usr/bin/env node

import * as cli from "../src/cli.js";
//import cli from "/crs/cli.js";

console.log("Welcome to the Brain Games!");
const userName = cli.askName();
console.log(`Hellow,  ${userName}!`);
