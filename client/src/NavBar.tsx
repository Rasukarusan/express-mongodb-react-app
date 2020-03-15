import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 20vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
}
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
