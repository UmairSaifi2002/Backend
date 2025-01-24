const express = require('express')
const app = express()
const port = 3000

// app.get or app.put or app.post or app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello World!!!@$$......................hey.....')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// request Parameters & Queries
// now we are creating different pages manually
app.get('/about', (req, res) => {
  res.send('About Us.')
})

app.get('/contact', (req, res) => {
  res.send('Contact Us.')
})

app.get('/Home', (req, res) => {
  res.send('Let have a brief Description.')
})

// now we are  automate this 
// means what we type will be written in send
app.get('/home/:slug', (req, res) => {
  // for URL
  // http://127.0.0.1:3000/hello%20_umair-Saifi?mode=dark&region=in
  console.log(req)  // it gives all response
  console.log(req.params)  // { slug: 'hello _umair-Saifi' }
  console.log(req.query)  // { mode: 'dark', region: 'in' }
  res.send(`hello ${req.params.slug}.`)
})
