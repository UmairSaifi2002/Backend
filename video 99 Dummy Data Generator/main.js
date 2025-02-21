// Express module ko import karo
const express = require('express')
// Express app ko initialize karo
const app = express()
// Mongoose module ko import karo
const mongoose = require('mongoose');
// Employee model ko import karo
const Employee = require("./model/Employee")

// MongoDB se connection karo
conn = mongoose.connect('mongodb://127.0.0.1:27017/company');
// Port number define karo
const port = 3000

// EJS ko view engine ke tarah set karo
app.set('view engine', 'ejs');

// Random element generate karne ke liye function banaya
const getRandom = (arr)=>{
    // Array se random element select karo
    let rno = Math.floor(Math.random() * (arr.length - 1))
    return arr[rno]
}

// Home route define karo
app.get('/', (req, res) => {
    // 'index' view render karo aur 'foo' variable pass karo
    res.render('index', { foo: 'FOO' });
})

// '/generate' route define karo
app.get('/generate', async (req, res) => {
    // Employee collection ko clear karo
    await Employee.deleteMany({}) 
    // Random data generate karo

    // Random names array define karo
    let randomNames = ['Rohan', "Sohan", "Mohan", "Sobhan"]
    // Random languages array define karo
    let randomLang = ["Python", "js", "C++", "Java"]
    // Random cities array define karo
    let randomCities = ["Bilaspur", "Moradabad", "Mysore", "Kolkata"]
    
    // 10 random employees generate karo
    for (let index = 0; index < 10; index++) {
        // Employee document create karo
        let e = await Employee.create({
            // Random name select karo
            name: getRandom(randomNames),
            // Random salary generate karo
            salary: Math.floor(Math.random() * 22000),
            // Random language select karo
            language: getRandom(randomLang),
            // Random city select karo
            city: getRandom(randomCities),
            // Random boolean value generate karo
            isManager: (Math.random()>0.5)?true:false
        })
        // Employee document ko console log karo
        console.log(e)
    }

    // 'index' view render karo aur 'foo' variable pass karo
    res.render('index', { foo: 'FOO' });
})

// Server ko start karo
app.listen(port, () => {
    // Port number print karo
    console.log(`Example app listening on port ${port}`)
})
// This code creates an Express app that connects to a MongoDB database and generates random employee data. The comments explain each part of the code in Hinglish.