import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  const[name,setName]=useState('');
  const[greeting,setgreeting]=useState('');
  const handlechange=(e)=>{
    setName(e.target.value);
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  if(name.trim()!=='')
  {
    setgreeting('Hello,${name}!');
  }
  return (
    <div className="App">
      <h2>Hey!!! Greeting</h2>
      <form onSubmit={handleSubmit}data-testing="form">
        <label data-testid="label">Enter your name</label>
        <input type="text" value={name} onChange={handlechange}></input>
        <button type="submit" data-testid="buttonElement">Say Hello</button>
      </form>
      {greeting && <h2>{greeting}</h2>}
    </div>
  );
}

export default App;
