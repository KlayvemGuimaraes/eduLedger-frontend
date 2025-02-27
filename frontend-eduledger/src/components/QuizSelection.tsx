import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
  padding: 2rem;
`;

const Card = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  text-align: center;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const QuizLink = styled(Link)`
  display: block;
  padding: 1rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.25rem;
  text-decoration: none;
  margin: 0.5rem 0;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005bb5;
  }
`;

const QuizSelection: React.FC = () => {
  return (
    <Container>
      <Title>Escolha um Quiz</Title>
      <Card>
        <QuizLink to="/quiz/blockchain">Redes Blockchain</QuizLink>
        <QuizLink to="/quiz/security">Como se Proteger na Tech Blockchain</QuizLink>
        <QuizLink to="/quiz/cryptocurrencies">Criptomoedas</QuizLink>
        <QuizLink to="/quiz/smart-contracts">Smart Contracts</QuizLink>
        <QuizLink to="/quiz/mining">Mineração de Criptomoedas</QuizLink>
      </Card>
    </Container>
  );
};

export default QuizSelection;