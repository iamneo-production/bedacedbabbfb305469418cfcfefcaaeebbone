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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
