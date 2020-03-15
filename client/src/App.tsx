import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
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
      </header>
        <Router>
          <Navbar />
          <Route path='/CsvUpload' component={CsvUpload} />
          <Route path='/OrderIndex' component={OrderIndex} />
        </Router>
    </div>
  );
}

export default App;
