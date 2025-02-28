import React, { useState } from 'react';
import styled from 'styled-components';
import { textos } from '../../data/tutorial.ts';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #f0f0f0;
  min-height: 100vh;
`;

const Content = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.25rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005bb5;
  }
`;

const BulkText = styled.div`
  margin-bottom: 2rem;
`;

const Tutorial: React.FC = () => {
  const [step, setStep] = useState(1);

  // Obtém o conteúdo correspondente ao step atual
  const conteudoAtual = textos.find((texto) => texto.id === step);

  return (
    <Container>
      <Content>
        <Title>{conteudoAtual?.title || 'Conteúdo não disponível'}</Title>
        <BulkText>
          {conteudoAtual?.paragraphs ? (
            conteudoAtual.paragraphs.map((paragrafo, index) => (
              <Paragraph key={index}>{paragrafo}</Paragraph>
            ))
          ) : (
            <Paragraph>Conteúdo não disponível.</Paragraph>
          )}
        </BulkText>
        <Button
          onClick={() => {
            if (step < textos.length) setStep(step + 1);
          }}
        >
          Próximo
        </Button>
      </Content>
    </Container>
  );
};

export default Tutorial;