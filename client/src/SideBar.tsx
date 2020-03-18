import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Avatar } from 'evergreen-ui';

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
  color: #818181;
  display: block;
  &:hover { color: #f1f1f1; }
`;

function SideBar() {
  return (
    <Nav>
      <NavItem to="/">
        <Avatar name="N E" isSolid color="green" size={32} />
      </NavItem>
      <NavItem to="/">Home</NavItem>
      <hr />
      <NavItem to="/CsvUpload">受注一括登録</NavItem>
      <hr />
      <NavItem to="/OrderIndex">受注伝票</NavItem>
    </Nav>
  );
}

export default SideBar;
