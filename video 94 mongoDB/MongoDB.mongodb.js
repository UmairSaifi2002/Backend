/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('sigma');

// Insert a few documents into the sales collection.
db.getCollection('sigma').insertMany([
    
        {
            "name": "Sigma Web Development Fundamentals",
            "price": 20000,
            "instructor": "Umair",
            "duration": "3 months",
            "level": "Beginner",
            "language": "English",
            "certificate": true
        },
        {
            "name": "Advanced Sigma Full-Stack Development",
            "price": 25000,
            "instructor": "Ali",
            "duration": "4 months",
            "level": "Intermediate",
            "language": "Urdu",
            "certificate": true
        },
        {
            "name": "Sigma Frontend Mastery",
            "price": 18000,
            "instructor": "Sara",
            "duration": "2 months",
            "level": "Beginner",
            "language": "English",
            "certificate": false
        },
        {
            "name": "Sigma Backend Development Bootcamp",
            "price": 22000,
            "instructor": "Ahmed",
            "duration": "3 months",
            "level": "Advanced",
            "language": "English",
            "certificate": true
        },
        {
            "name": "Sigma MERN Stack Development",
            "price": 28000,
            "instructor": "Umair",
            "duration": "5 months",
            "level": "Intermediate",
            "language": "Urdu",
            "certificate": true
        },
        {
            "name": "Sigma Web Design and UX",
            "price": 15000,
            "instructor": "Zain",
            "duration": "2 months",
            "level": "Beginner",
            "language": "English",
            "certificate": false
        },
        {
            "name": "Sigma React.js Specialization",
            "price": 23000,
            "instructor": "Ayesha",
            "duration": "3 months",
            "level": "Intermediate",
            "language": "English",
            "certificate": true
        },
        {
            "name": "Sigma Node.js and API Development",
            "price": 21000,
            "instructor": "Kamran",
            "duration": "3 months",
            "level": "Advanced",
            "language": "Urdu",
            "certificate": true
        },
        {
            "name": "Sigma JavaScript Essentials",
            "price": 17000,
            "instructor": "Sana",
            "duration": "2 months",
            "level": "Beginner",
            "language": "English",
            "certificate": false
        },
        {
            "name": "Sigma Complete Web Development",
            "price": 30000,
            "instructor": "Umair",
            "duration": "6 months",
            "level": "Advanced",
            "language": "English",
            "certificate": true
        },

]);



// Print a message to the output window.
console.log(`Insertion of Data is Complete`);

