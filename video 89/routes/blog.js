const express = require('express')
const router = express.Router()

// define the homepage route
router.get('/', (req, res) => {
    res.send('Birds home pages')
})

// define the about route
router.get('/about', (req, res) => {
    res.send('About Birds home pages')
})

// define the about route
router.get('/blogpost/:slug', (req, res) => {
    res.send(`fetch the blog-post ${req.params.slug}`)
})

module.exports = router     