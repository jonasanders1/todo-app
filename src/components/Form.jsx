import React, { useEffect, useState } from 'react';
import './Form.css';

const Form = ({ setTodoLists, todoLists }) => {
  const [listName, setListName] = useState('');
  const [list, setList] = useState(todoLists);

  const handleOnClick = () => {
    const newItem = {
      title: listName,
      tasks: [],
    };
    console.log('New Item:', newItem);
    setListName('');
    setList([...list, newItem]);
  };

  useEffect(() => {
    setList(todoLists); // Update the list state when todoLists prop changes
  }, [todoLists]);

  useEffect(() => {
    localStorage.setItem('test', JSON.stringify(list));
  }, [list]);

  return (
    <div className='form-container'>
      <input
        type='text'
        onChange={(e) => setListName(e.target.value)}
        value={listName}
      />
      <button onClick={handleOnClick}>Add List</button>
    </div>
  );
};

export default Form;
