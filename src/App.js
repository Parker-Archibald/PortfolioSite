import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from '../src/Pages/HomePage'
import NavBar from '../src/Components/Nav';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './Config/Routes'

function App() {
  document.title='Parker Archibald'
  return (
    <div>
    <div className="App">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <Router>
        <NavBar/>
        <Routes/>
      </Router>
    </div>
    </div>
  );
}

export default App;
