const greetings = "Hello World";
// console.log(greetings);

const functionsystem = require("fs");

const textIn = functionsystem.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

const textOut = `This is what we know about the Avacado: ${textIn} and is created at ${Date.now()}`;

functionsystem.writeFileSync("./txt/output.txt", textOut);
console.log("File Write is completed");
