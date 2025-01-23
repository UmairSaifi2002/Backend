// // This code only runs when you remove type:module from the package.json

// const fs = require('fs')
// console.log(fs);

// console.log('Starting');
// // fs.writeFileSync('umair.txt','Umair is a Good Boy.')
// // now we want to work asynchronously 
// // we use writeFile
// fs.writeFile('umair.txt','Hello, EveryOne!! \nSo, I want to tell you Something. \nUmair is a Good Boy.', () => {
//     console.log('Done');
//     fs.readFile('umair.txt', (error, data) => {
//         console.log(error, data.toString());        
//     })    
// })

// fs.appendFile('umair.txt', '\nappending the file using the appendFile function() \nNow Hello EveryOne!! \nHow are you all?',  (e, d) => {
//     console.log(d);
// })

// console.log('Ends');

// ------------------------------------------------------------------------------------
// fs module having some new format to escape the callback hell

import fs from 'fs/promises'
// here we are in a fs module
// so the great part is we can use await without using async function.
let a = await fs.readFile('umair.txt')

console.log(a.toString());

let b = await fs.writeFile('umair.txt', 'This Promise is very Nice.')
console.log(b);

let c = await fs.appendFile('umair.txt', 'Hello, My Name is Umair Saifi!')
console.log(c);

