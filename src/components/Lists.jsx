import React, { useEffect, useState } from 'react';
import './Lists.css';

const Lists = () => {
  const [todoLists, setTodoLists] = useState([]);

  useEffect(() => {
    const todoListsFromLocalStorage = JSON.parse(localStorage.getItem('TodoList'));
    if (todoListsFromLocalStorage) {
      setTodoLists(todoListsFromLocalStorage);
    }
  }, []);

  if (todoLists.length === 0) {
    return (
      <div className='lists-wrapper'>
        <h3>No lists</h3>
      </div>
    );
  }

  return (
    <div className='lists-wrapper'>
      {todoLists.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Lists;
