//const {readFile} = require('fs');
//const path = require ('path');
import { readFileSync } from "node:fs";

const elves = readFileSync("dayOneExample.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n\n"); // Split on newline


  function part1() {
    const calories = elves.map((elf) => {
      const calories = elf.split("\n").map(Number);
      const sum = calories.reduce((previous, current) => previous + current, 0);
    });
  
    console.log(sum);
  }

  
  part1()