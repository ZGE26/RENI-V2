import React from 'react';
import './App.css';
// import Home from './pages/Home';
// import About from './pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Regist from './pages/Regist';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/regist" element={<Regist />} />
      </Routes>
    </Router>
  )
}

export default App;
