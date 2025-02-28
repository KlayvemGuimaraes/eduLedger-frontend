import React, { useState } from 'react';
import styled from 'styled-components';

const FlashcardContainer = styled.div`
  width: 220px;
  height: 140px;
  perspective: 1000px;
  cursor: pointer;
  margin: 20px;
`;

const FlashcardInner = styled.div<{ isFlipped: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${({ isFlipped }) => (isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)')};
`;

const FlashcardFace = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  padding: 10px;
  text-align: center;
`;

const FlashcardFront = styled(FlashcardFace)`
  background-color: #561410;
  color: #fff;
  font-weight: bold;
`;

const FlashcardBack = styled(FlashcardFace)`
  background-color: #f8f8f8;
  transform: rotateY(180deg);
  color: #561410;
  font-weight: bold;
`;

const Flashcard: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <FlashcardContainer onClick={handleClick}>
      <FlashcardInner isFlipped={isFlipped}>
        <FlashcardFront>{question}</FlashcardFront>
        <FlashcardBack>{answer}</FlashcardBack>
      </FlashcardInner>
    </FlashcardContainer>
  );
};

const FlashcardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 30px;
  padding: 20px;
`;

const FlashcardPageContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  color: #561410;
  font-weight: bold;
  text-decoration: none;
`;

const FlashcardPage: React.FC = () => {
  const flashcards = [
    { question: 'O que é criptomoeda?', answer: 'Uma moeda digital que utiliza criptografia para segurança.' },
    { question: 'O que é blockchain?', answer: 'Uma tecnologia de registro distribuído que garante a integridade das transações.' },
    { question: 'O que é um smart contract?', answer: 'É um contrato digital autoexecutável com termos escritos em código e armazenado em blockchain.' },
    { question: 'O que é blockchain?', answer: 'É um banco de dados distribuído e imutável que registra transações de forma segura e transparente.' },
    { question: 'O que é mineração de criptomoedas?', answer: 'É o processo de validar transações e adicionar blocos ao blockchain, recebendo criptomoedas como recompensa.' },
    { question: 'O que é uma carteira digital?', answer: 'É um software ou hardware que armazena chaves privadas para acessar e gerenciar criptomoedas.' },
    { question: 'O que é DeFi (Finanças Descentralizadas)?', answer: 'É um ecossistema financeiro baseado em blockchain que elimina intermediários como bancos.' },
    { question: 'O que é um token?', answer: 'É um ativo digital criado em uma blockchain, podendo representar dinheiro, propriedades ou utilidades.' },
    { question: 'O que é um NFT?', answer: 'É um token único e não fungível que representa a propriedade de um item digital, como arte ou colecionáveis.' },
    { question: 'O que é Proof of Work (PoW)?', answer: 'É um mecanismo de consenso onde computadores resolvem problemas matemáticos para validar transações no blockchain.' },
    { question: 'O que é Proof of Stake (PoS)?', answer: 'É um mecanismo de consenso onde validadores são escolhidos com base na quantidade de criptomoedas que possuem.' },
    { question: 'O que é um fork em blockchain?', answer: 'É uma divisão na rede blockchain, podendo ser soft fork (compatível) ou hard fork (incompatível).' },
  ];

  return (
    <FlashcardPageContainer>
      <Title>Saiba Agora</Title>
      <FlashcardGrid>
        {flashcards.map((flashcard, index) => (
          <Flashcard key={index} question={flashcard.question} answer={flashcard.answer} />
        ))}
      </FlashcardGrid>
    </FlashcardPageContainer>
  );
};

export default FlashcardPage;