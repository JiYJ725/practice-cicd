import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Light from "./Light";

function App() {
  return (
    <div className="App">
      <h1>v2 수정 했습니다!!</h1>
      <Counter />
      <Light />
    </div>
  );
}

export default App;
