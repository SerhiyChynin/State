import './App.css';
import React from 'react';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import { useState } from 'react';

function App() {


  return (
    <div >
      <Comp1 />
      <hr />
      <Comp2/>
    </div>
  );
}

export default App;
