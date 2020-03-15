import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`;

function Navbar() {
  return(
    <Container>
      <Link to="/">Home</Link>
      <hr/>
      <Link to="/CsvUpload">CsvUpload</Link>
      <hr/>
      <Link to="/OrderIndex">OrderList</Link>
      <hr/>
    </Container>
  );
}

export default Navbar;
