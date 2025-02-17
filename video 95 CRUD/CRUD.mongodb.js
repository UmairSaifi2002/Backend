use("CrudDB")

console.log(db);

db.createCollection('Courses')

db.courses.insertOne(
    {
        name:'Umair Web Development',
        price:0,
        assignment: 12,
        projects: 45,
    }
)

db.courses.insertMany(
    [
        {
            "name": "Sigma Web Development Fundamentals",
            "price": 0,
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
            "price": 0,
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
    ]
)

// let a = db.courses.find({price:0})

// console.log(a);

// console.log(a.count());

// console.log(a.toArray());

let b = db.courses.findOne({price:0})
console.log(b);

// Update
db.courses.updateOne({price:0},{$set:{price:100}})

// Delete
db.courses.deleteOne({price:100})
db.courses.deleteMany({price:100})
