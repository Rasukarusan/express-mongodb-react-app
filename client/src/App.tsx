import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './NavBar';
import Footer from './Footer';
import CsvUpload from './CsvUpload/CsvUpload';
import OrderIndex from './Order/OrderIndex';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Route path='/CsvUpload' component={CsvUpload} />
        <Route path='/OrderIndex' component={OrderIndex} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
