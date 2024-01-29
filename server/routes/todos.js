const express = require('express');
const router = express.Router();
const Todo = require('../models/todoModel');

// Add routes here
router.post('/', async (req, res) => {
    try {
      const newTodo = new Todo({
        text: req.body.text,
        isCompleted: false
      });
      const savedTodo = await newTodo.save();
      res.status(201).json(savedTodo);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });



  router.get('/', async (req, res) => {
    try {
      console.log("Fetching todos...");
      const todos = await Todo.find();
      console.log("Todos fetched:", todos);
      res.json(todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
      res.status(500).json({ message: error.message });
    }
  });
  

  router.patch('/:id', async (req, res) => {
    try {
      const updatedTodo = await Todo.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(updatedTodo);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  router.delete('/:id', async (req, res) => {
    try {
      const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
      res.json(deletedTodo);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
    
module.exports = router;