// App.js

import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import axios from 'axios';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos', error);
    }
  };


  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo App</h1>
        <AddTodo fetchTodos={fetchTodos} />
        <TodoList todos={todos} fetchTodos={fetchTodos} />
      </header>
    </div>
  );
}

export default App;
