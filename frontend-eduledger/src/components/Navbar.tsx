import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #000;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  color: #fff;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #0070f3;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;

  &:hover {
    color: #0070f3;
  }
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <Logo to="/">EduLedger</Logo>
      <NavLinks>
        <StyledLink to="/">Login</StyledLink>
        <StyledLink to="/quiz-selection">Quiz</StyledLink>
        <StyledLink to="/faq">FAQ</StyledLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;