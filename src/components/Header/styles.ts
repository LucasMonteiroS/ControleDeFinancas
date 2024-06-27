import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #4285f4;
  color: white;
`;

export const NavItem = styled.div`
  margin: 0 10px;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
`;
