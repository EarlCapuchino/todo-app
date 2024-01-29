import React from 'react';
import axios from 'axios';

const TodoItem = ({ todo, fetchTodos }) => {
  const toggleComplete = async () => {
    try {
      await axios.patch(`/api/todos/${todo._id}`, {
        isCompleted: !todo.isCompleted
      });
      fetchTodos();
    } catch (error) {
      console.error('Error updating todo', error);
    }
  };

  const deleteTodo = async () => {
    try {
      await axios.delete(`/api/todos/${todo._id}`);
      fetchTodos();
    } catch (error) {
      console.error('Error deleting todo', error);
    }
  };

  return (
    <div>
      <span style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={toggleComplete}>
        {todo.isCompleted ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
};

export default TodoItem;
