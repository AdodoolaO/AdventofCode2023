//const {readFile} = require('fs');
//const path = require ('path');
const fs = require("fs");

const data = fs.readFileSync("./dayOne.txt",  { encoding: "utf-8" })
.replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
.trim() // Remove starting/ending whitespace
.split("\n\n"); // Split on newline

console.log(data)

function part1(){
  const calories = data.map((elf) => {
   const calories = elf.split("\n").map(Number);
return calories.reduce((previous, current) => previous + current, 0);   
  });

 console.log(Math.max(...calories));
}

function part2(){
//Find the top three Elves carrying the most Calories
const calories = data.map((elf) => {
  const calories = elf.split("\n").map(Number);
return calories.reduce((previous, current) => previous + current, 0);   
 });



}

part1()
part2()