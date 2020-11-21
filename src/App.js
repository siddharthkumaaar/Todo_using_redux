import React from 'react';
import './App.css';
import NavBar from './component/NavBar';
import Todo from './component/Todo';
import Total from './component/Total';
import Routing from './Routes/Routing';

function App() {
  // console.log(this.state)
  return (
    <div className="App">
      <NavBar />
      <Routing />
      {/* <Total />
      <Todo /> */}
    </div>
  );
}

export default App;
