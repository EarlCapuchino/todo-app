import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

const TodoList = () => {
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
    <div>
      <h2>Todo List</h2>
      {todos.map(todo => (
        <TodoItem key={todo._id} todo={todo} fetchTodos={fetchTodos} />
      ))}
    </div>
  );
};

export default TodoList;