import React, { useState } from 'react';

const Form = () => {
  const [listName, setListName] = useState('');

  const handleOnClick = () => {
    const newItem = {
      title: listName,
      tasks: [],
    };
    console.log('New Item:', newItem);
    setListName('');
  };

  return (
    <div>
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
