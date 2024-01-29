import React, { useState } from 'react';
import axios from 'axios';

const AddTodo = ({ fetchTodos }) => {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!todoText) return;
    try {
      await axios.post('http://localhost:5000/api/todos', { text: todoText });
      setTodoText('');
      fetchTodos();
    } catch (error) {
      console.error('Error adding todo', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={todoText} 
        onChange={(e) => setTodoText(e.target.value)} 
        placeholder="Add a new todo" 
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
