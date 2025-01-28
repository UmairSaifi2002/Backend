const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const birds = require('./routes/bird')

// Default Middleware
app.use(express.static('public'))
app.use('/bird', birds)

// Middleware 1
app.use((req, res, next) => {
  console.log('M1 LOGGED in')
  fs.appendFileSync('logs.txt',`${Date.now()} is a ${req.method}, \n`)
  req.umair = 'I am Umair Saifi.'
  next()
})

// Middleware 2
app.use((req, res, next) => {
  console.log('M2 LOGGED in')
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello about!' + req.umair)
})

app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
      