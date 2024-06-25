import React from 'react';
import { Nav, NavItem, NavLink, Title } from './Header';

const Header: React.FC = () => {
  return (
    <Nav>
      <Title>Financial Control</Title>
      <NavItem>
        <NavLink href="/Home">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/Despesa">Expenses</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/Meta">Goals</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/Orçamento">Budget</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/Receita">Income</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/Chart">Gráfico</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/">Logout</NavLink>
      </NavItem>
    </Nav>
  );
};

export default Header;

