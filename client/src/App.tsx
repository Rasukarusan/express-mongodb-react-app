import React, { useState, useEffect }  from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [apiResponse, setApiResponse] = useState<String>('');

  const callAPI = () => {
    fetch('http://localhost:9000/testAPI').then
    (res => res.text()).then
    (res => setApiResponse(res));
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-intro">
          {apiResponse}
        </p>
      </header>
    </div>
  );
}

export default App;
