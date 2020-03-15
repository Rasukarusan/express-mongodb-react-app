import React, { useState, useEffect }  from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Navbar from './NavBar';
import CsvUpload from './CsvUpload/CsvUpload';
import OrderIndex from './Order/OrderIndex';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <Navbar />
          <Route path='/CsvUpload' component={CsvUpload} />
          <Route path='/OrderIndex' component={OrderIndex} />
        </Router>
      </header>
    </div>
  );
}

export default App;
