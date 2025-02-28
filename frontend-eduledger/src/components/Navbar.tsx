import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Web3Provider } from '@ethersproject/providers';

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
    color: #fff;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;

  &:hover {
    color: #561410;
  }
`;

const ConnectButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #561410;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  text-decoration: none;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #561410;
  }
`;

const Navbar: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);
  const navigate = useNavigate();

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new Web3Provider(window.ethereum);
        await provider.send('eth_requestAccounts', []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);

        // Configurar a rede Arbitrum
        const chainId = '0xA4B1'; // Chain ID da Arbitrum One
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId }],
        });

        // Redirecionar para a rota /home-main
        navigate('/quiz-selection');
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('MetaMask não está instalada. Por favor, instale-a para continuar.');
    }
  };

  return (
    <Nav>
      <Logo to="/">EduLedger</Logo>
      <NavLinks>
        {account && (
          <>
            <StyledLink to="/quiz-selection">Quiz</StyledLink>
            <StyledLink to="/faq">FAQ</StyledLink>
            <StyledLink to="/flashcards">FlashCards</StyledLink>
          </>
        )}
        <ConnectButton onClick={connectWallet}>
          {account ? `Conectado: ${account}` : 'Conectar Carteira'}
        </ConnectButton>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;