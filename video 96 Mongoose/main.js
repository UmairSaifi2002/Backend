import mongoose from "mongoose";
import { express } from 'express';
import { Todo } from '../Models/Todo.js'

let connection = await mongoose.connect('mongodb://localhost:27017/todo')

// const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const todo = new Todo({tittle: 'Hey! First todo', desc: 'Description of this todo', isDone: false })
  todo.save()
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
