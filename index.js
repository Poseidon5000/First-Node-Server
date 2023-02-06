const calculate = require('./add')
// const fs = require("fs")

// const getText = fs.readFileSync('./txt/input.txt', 'utf-8')

// console.log(getText);


// const sendText = `This is what the sun is doing today ${getText}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', sendText)
// console.log('File Wrote!');




// fs.readFile('./txt/start.txt', 'utf-8', (err, data)=>{
//     console.log(data); 
// })

// console.log('read me first bitch');


//BUILDING WEB SERVERS

// const fs = require('fs');

// const http = require('http');

// http.createServer((req, res)=> {
//     res.end("HELLO YOU REq")
// })

 console.log(calculate.add(10,12));
 console.log(calculate.subtract(40, 23));
 console.log(calculate.divide(60, 25));