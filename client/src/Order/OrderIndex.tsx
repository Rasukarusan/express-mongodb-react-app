import React, { useState, useEffect }  from 'react';
import styled, { css } from 'styled-components'

const Container = styled.div`
  color: black;
  background: #ffffff;
  width: 100vw;
  height:100vh;
`;

function List() {
  const [apiResponse, setApiResponse] = useState<String>('');

  const callAPI = () => {
    fetch('http://localhost:9000/orders')
      .then(res => res.text())
      .then(res => setApiResponse(res))
      .catch(err => err);
  }

  useEffect(() => {
    callAPI();
  }, []);

  return(
    <div> {apiResponse} </div>
  );
}

function OrderIndex() {
  return (
    <Container>
      <h1>Hello Order Index!!</h1>
      <List />
    </Container>
  );
}

export default OrderIndex;
