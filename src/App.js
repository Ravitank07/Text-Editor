
import React, { useState } from 'react';
import './App.css';
import About from './componets/About';
import Navbar from './componets/Navbar';
import TextForm from './componets/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';
function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'gray';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Routes>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/" element={<TextForm mode={mode}/>}>
            </Route>
          </Routes>
       {/* <TextForm mode={mode} /> */}
      {/* <About/> */}
      </Router>
    </>
  );
}

export default App;
