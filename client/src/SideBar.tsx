import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Nav = styled.div`
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
`;

const NavItem = styled(Link)`
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  &:hover { color: #f1f1f1; }
`;

function SideBar() {
  return (
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/CsvUpload">CsvUpload</NavItem>
      <NavItem to="/OrderIndex">OrderList</NavItem>
    </Nav>
  );
}

export default SideBar;
