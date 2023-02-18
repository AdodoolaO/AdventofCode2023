//load file 
//Sum up arrays
//Select max sum 

//const fs = require('node:fs');
//const path = require('path')
const {readFile} = require('fs/promises')

async function readThisFile(filePath) {
    try {
      const data = await readFile(filePath);
      const newData = data.toString().replace(/\r/g, '').trim().split("\n\n")
      console.log(newData)

 
  
newData.forEach(elem =>{ 
let arr = elem.split("\n").map(Number);
let newArr = arr.reduce((acc, currentValue)=> acc+currentValue,0);
console.log(Math.max(newArr))

});

//console.log(Math.max(...newArr))


      
    } catch (error) {
      console.error(error.message);
}}
  

  readThisFile('dayOneExample.txt')
