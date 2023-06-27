import React, { useState, useEffect } from 'react';
import './App.css';
import Lists from './components/Lists';
import Form from './components/Form';

const App = () => {
  const [todoLists, setTodoLists] = useState([]);

  useEffect(() => {
    try {
      const todoListsFromLocalStorage = localStorage.getItem('test');
      if (todoListsFromLocalStorage) {
        const parsedTodoLists = JSON.parse(todoListsFromLocalStorage);
        setTodoLists(parsedTodoLists);
      }
    } catch (error) {
      console.error('Error parsing todoLists from localStorage:', error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('test', JSON.stringify(todoLists));
    } catch (error) {
      console.error('Error saving todoLists to localStorage:', error);
    }
  }, [todoLists]);

  return (
    <div className='container'>
      <div className='lists'>
        <div className='form-container'>
          <Form setTodoLists={setTodoLists} />
        </div>
        <div className='lists-container'>
          <Lists todoLists={todoLists} />
        </div>
      </div>
      <div className='todos'>2</div>
    </div>
  );
};

export default App;
