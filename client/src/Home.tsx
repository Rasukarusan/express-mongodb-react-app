import React from 'react';
import styled, { keyframes } from 'styled-components'
import logo from './logo.svg';

const Container = styled.div`
  color: black;
  background: #ffffff;
  width: 100vw;
  height:100vh;
  margin-left: 10px;
`;

const LogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Logo = styled.img`
  height: 35vmin;
  pointer-events: none;
  animation: ${LogoSpin} infinite 20s linear;
  margin-left: 100px;
`

const Title = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
`;

function Home(props) {
  return(
    <Container>
      <Title>{props.title}</Title>
      <Logo src={logo} />
      <Logo src={logo} />
      <Logo src={logo} />
      <Logo src={logo} />
    </Container>
  );
}

export default Home;
