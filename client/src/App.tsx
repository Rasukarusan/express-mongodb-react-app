import React, { useState, useEffect }  from 'react';
import logo from './logo.svg';
import './App.css';
import CsvUpload from './CsvUpload/CsvUpload';

function App() {
  const [apiResponse, setApiResponse] = useState<String>('');
  const [dbResponse, setDbResponse] = useState<String>('');

  const callAPI = () => {
    fetch('http://localhost:9000/testAPI')
    .then(res => res.text())
    .then(res => setApiResponse(res));
  };

  const callDB = () => {
    fetch('http://localhost:9000/testDB')
      .then(res => res.text())
      .then(res => setDbResponse(res))
      .catch(err => err);
  }

  useEffect(() => {
    callAPI();
    callDB();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-intro">
          {apiResponse}
        </p>
        <p className="App-intro">
          {dbResponse}
        </p>
      </header>
      <CsvUpload />
    </div>
  );
}

export default App;
