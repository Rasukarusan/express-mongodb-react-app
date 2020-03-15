import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return(
    <div>
      <Link to="/">Home</Link>
      <hr/>
      <Link to="/CsvUpload">CsvUpload</Link>
      <hr/>
      <Link to="/OrderIndex">OrderList</Link>
    </div>
  );
}

export default Navbar;
