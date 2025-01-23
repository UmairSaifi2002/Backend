// import { createServer } from 'node:http';
// // agr hame server restart krna h agr koi bhi changes hoga to 
// // ham nodemon se run krengy file
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1> HELLO WORLD !!</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// --------------------------------------------------------------------------

// import {a,b,c,name} from './mymodule.js'
// import obj from './mymodule.js'

// console.log(a,b,c,name);

// console.log(obj);

// --------------------------------------------------------------------------
// to run this you have to remove 
// type : "module" from the package.json file
// const a = require('./mymodule2.js')

// console.log(a);

// console.log(__dirname);
// console.log(__filename);