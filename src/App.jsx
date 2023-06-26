import React from 'react';
import './App.css';
import Lists from './components/Lists';
import Form from './components/Form';

function App() {
  return (
    <div className='container'>
      <div className='lists'>
        <div className='form-container'>
          <Form />
        </div>
        <div className='lists-container'>
          <Lists />
        </div>
      </div>
      <div className='todos'>2</div>
    </div>
  );
}

export default App;
