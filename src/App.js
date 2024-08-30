import React from 'react';
import './App.css';
import './option.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'; // Make sure the path to Home component is correct
import Sciencefp from './Sciencefp';
import Art from './Art';
import Music from './Music';
import LoginPage from './LoginPage';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Sciencefp' element={<Sciencefp/>}></Route>
        <Route path='/Art' element={<Art/>}></Route>
        <Route path='/Music' element={<Music/>}></Route>
        <Route path='/LoginPage' element={<LoginPage/>}></Route>
       </Routes>
       </BrowserRouter>
      
    </div>
  );
}

export default App;
