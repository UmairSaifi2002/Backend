const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
    console.log('Hey, its a GET request.');
    res.send('Hello World using GET')
}).post('/', (req, res) => {
    console.log('Hey, its a POST request.');
    res.send('Hello World using POST') 
}).put('/', (req, res) => {
    console.log('Hey, its a PUT request.');
    res.send('Hello World using PUT') 
}).delete('/', (req, res) => {
    console.log('Hey, its a DELETE request.');
    res.send('Hello World using DELETE') 
})

app.get('/index', (req, res) => {
    console.log('Hey it is index.html');
    res.sendFile('templates/index.html', {root: __dirname})
})

app.get('/api', (req, res) => {
    res.json({a:1, b:2, c:3})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

