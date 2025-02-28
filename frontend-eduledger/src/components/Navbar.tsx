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
  align-items:center; 
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

const ConnectButton = styled(Link)`
  padding: 0.5rem 1rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005bb5;
  }
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <Logo to="/">EduLedger</Logo>
      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/quiz-selection">Quiz</StyledLink>
        <StyledLink to="/faq">FAQ</StyledLink>
        <ConnectButton to="/login">Conectar Carteira</ConnectButton>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;