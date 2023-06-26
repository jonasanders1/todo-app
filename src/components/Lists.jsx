import React, { useEffect, useState } from 'react';
import './Lists.css';


const Lists = ({ todoLists }) => {
  if (todoLists.length === 0) {
    return (
      <div className='lists-wrapper'>
        <h3 style={{ textAlign: 'center' }}>No lists yet...</h3>
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
