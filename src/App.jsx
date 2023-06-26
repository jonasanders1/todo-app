import React, {useState, useEffect} from 'react';
import './App.css';
import Lists from './components/Lists';
import Form from './components/Form';



const App = () => {
  const [todoLists, setTodoLists] = useState([{name:'Start', tasks:[]}]);

  useEffect(() => {
    const todoListsFromLocalStorage = JSON.parse(localStorage.getItem('test'));
    if (todoListsFromLocalStorage) {
      setTodoLists(todoListsFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('test', JSON.stringify(todoLists));
  }, []);

  return (
    <div className='container'>
      <div className='lists'>
        <div className='form-container'>
          <Form setTodoLists={setTodoLists} todoLists={todoLists} />
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
