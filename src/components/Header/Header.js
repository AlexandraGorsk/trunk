import React from 'react';

import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Navigation = styled('nav')`
  width: 100%;
  padding: 16px 8px;
  box-sizing: border-box;
  margin-bottom: 16px;
  background-color: white;
  box-shadow: 0 0 4px 0 #333;

  > ul {
    display: flex;
    flex-direction: row;
    margin: 0px 0px 0px 8px;
    padding: 0px;
  }
`;

const NavItem = styled('li')`
  list-style: none;
  padding: 0;
  margin: 0px 8px 0px 0px;

  > a {
    text-decoration: ${props => (props.active ? 'underline' : 'none')};
    color: ${props => (props.active ? 'green' : '#333')};
  }
`;

const Header = () => {
  const location = useLocation();

  return (
    <Navigation>
      <ul>
        <NavItem active={location.pathname.includes('posts')}>
          <Link to="posts">Posts</Link>
        </NavItem>
        <NavItem active={location.pathname.includes('todos')}>
          <Link to="todos">Todos</Link>
        </NavItem>
        <NavItem active={location.pathname.includes('users')}>
          <Link to="users">Users</Link>
        </NavItem>
      </ul>
    </Navigation>
  );
};

export default Header;
