import React from 'react';
import logo from './logo.svg';
import styled, { keyframes } from 'styled-components'

const Container = styled.div`
  color: white;
  background-color: #282c34;
  min-height: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left:0;
  bottom:0;
  right:0;
`

const LogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Logo = styled.img`
  height: 5vmin;
  pointer-events: none;
  animation: ${LogoSpin} infinite 20s linear;
`

function Footer() {
  return(
    <Container>
      <Logo src={logo} />
      <p>©tnk All Rights Reserved</p>
    </Container>
  );
}

export default Footer;
