import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const Card = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
`;

const QuizLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #561410;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 1rem;
  text-decoration: none;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #1c0c0b;
  }
`;

const QuizImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 0.5rem;
`;

const QuizText = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const QuizSelection: React.FC = () => {
  return (
    <Container>
      <Title>Escolha um Quiz</Title>
      <Card>
        <OptionsGrid>
          <QuizLink to="/quiz/blockchain">
            <QuizText>Redes Blockchain</QuizText>
          </QuizLink>
          <QuizLink to="/quiz/security">
            <QuizText>Como se Proteger na Tech Blockchain</QuizText>
          </QuizLink>
          <QuizLink to="/quiz/cryptocurrencies">
            <QuizText>Criptomoedas</QuizText>
          </QuizLink>
          <QuizLink to="/quiz/smart-contracts">
            <QuizText>Smart Contracts</QuizText>
          </QuizLink>
          <QuizLink to="/quiz/mining">
            <QuizText>Mineração de Criptomoedas</QuizText>
          </QuizLink>
        </OptionsGrid>
      </Card>
    </Container>
  );
};

export default QuizSelection;