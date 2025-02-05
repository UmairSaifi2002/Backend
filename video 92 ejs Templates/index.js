// Import the Express framework
const express = require('express');
// Create an instance of the Express application
const app = express();
// Define the port number on which the server will listen
const port = 3000;

// Set the view engine to EJS for rendering dynamic templates
app.set('view engine', 'ejs');

// // app.get('/', (req, res) => {
// //     let siteName = 'Adidas'
// //     let searchText = 'Search Now'
// //     res.sendFile('templates/index.html', { root: __dirname })
// // })

// Define a route for the root URL ('/')
// This route will handle GET requests to the homepage
app.get('/', (req, res) => {
    // Define some variables to pass data to the EJS template
    let siteName = 'Adidas'; // Name of the website
    let searchText = 'Search Now'; // Text for a search button
    let arr = [1, 54, 65]; // An array of numbers

    // Render the 'index' EJS template and pass the variables as data
    res.render('index', { 
        siteName: siteName, 
        searchText: searchText, 
        arr: arr 
    });
});

// Define another route for the root URL ('/')
// Note: This route will never be executed because the previous route also handles the same URL ('/')
// This is an example of how to define a route for rendering a blog post
app.get('/', (req, res) => {
    // Define variables for blog post data
    let blogTittle = 'Adidas why and when?'; // Title of the blog post
    let blogContent = 'Its a very good brand'; // Content of the blog post

    // Render the 'blogpost' EJS template and pass the blog data
    res.render('blogpost', { 
        blogTittle: blogTittle, 
        blogContent: blogContent 
    });
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});



// Note :- You have to run the command to start this projects
// npm init -y
// npm i express@4
// npm install ejs
// nodemon .\index.ejs