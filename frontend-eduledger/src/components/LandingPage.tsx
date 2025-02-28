import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import brazilFlag from '../assets/brazil-flag.png'; // Adicione a imagem da bandeira do Brasil na pasta assets
import usaFlag from '../assets/usa-flag.png'; // Adicione a imagem da bandeira dos EUA na pasta assets

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  color: #fff;
  text-align: center;
`;

const Header = styled.header`
  width: 100%;
  padding: 2rem 0;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 2rem;
  color: #fff;
  margin: 0;
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

const MainSection = styled.section`
  width: 100%;
  padding: 4rem 0;
  background-color: #000;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const Button = styled(Link)`
  padding: 1rem 2rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.25rem;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005bb5;
  }
`;

const InfoSection = styled.section`
  width: 100%;
  padding: 4rem 0;
  background-color: #111;
`;

const InfoTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const Card = styled.div`
  background: #222;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: left;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #ccc;
`;

const ComparisonSection = styled.section`
  width: 100%;
  padding: 4rem 0;
  background-color: #222;
`;

const ComparisonTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const ComparisonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

const CountryContainer = styled.div`
  text-align: center;
`;

const Flag = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 1rem;
`;

const BarContainer = styled.div`
  width: 200px;
  height: 20px;
  background-color: #444;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const Bar = styled.div<{ percentage: number }>`
  width: ${(props) => props.percentage}%;
  height: 100%;
  background-color: #0070f3;
`;

const Footer = styled.footer`
  width: 100%;
  padding: 2rem 0;
  background-color: #000;
  color: #fff;
  text-align: center;
`;

const LandingPage: React.FC = () => {
  return (
    <Container>
      <MainSection>
        <Title>EduLedger</Title>
        <Subtitle>Aprenda sobre tecnologias blockchain de forma fácil e acessível</Subtitle>
        <Button to="/login">Conectar Carteira</Button>
      </MainSection>
      <InfoSection>
        <InfoTitle>O que é Blockchain?</InfoTitle>
        <CardsContainer>
          <Card>
            <CardTitle>Transparência</CardTitle>
            <CardText>
              A tecnologia blockchain permite que todas as transações sejam visíveis para todos os participantes da rede, garantindo transparência e confiança.
            </CardText>
          </Card>
          <Card>
            <CardTitle>Segurança</CardTitle>
            <CardText>
              As transações em blockchain são criptografadas e imutáveis, o que significa que uma vez registradas, não podem ser alteradas ou excluídas.
            </CardText>
          </Card>
          <Card>
            <CardTitle>Descentralização</CardTitle>
            <CardText>
              A blockchain opera em uma rede descentralizada de computadores, eliminando a necessidade de uma autoridade central e reduzindo o risco de falhas.
            </CardText>
          </Card>
          <Card>
            <CardTitle>Eficiência</CardTitle>
            <CardText>
              A automação de processos através de contratos inteligentes reduz a necessidade de intermediários, tornando as transações mais rápidas e eficientes.
            </CardText>
          </Card>
        </CardsContainer>
      </InfoSection>
      <ComparisonSection>
        <ComparisonTitle>Investimento em Educação</ComparisonTitle>
        <ComparisonContainer>
          <CountryContainer>
            <Flag src={brazilFlag} alt="Bandeira do Brasil" />
            <BarContainer>
              <Bar percentage={5} />
            </BarContainer>
            <p>Brasil: 5%</p>
          </CountryContainer>
          <CountryContainer>
            <Flag src={usaFlag} alt="Bandeira dos EUA" />
            <BarContainer>
              <Bar percentage={15} />
            </BarContainer>
            <p>EUA: 15%</p>
          </CountryContainer>
        </ComparisonContainer>
      </ComparisonSection>
      <Footer>
        <p>&copy; 2025 EduLedger. Todos os direitos reservados.</p>
      </Footer>
    </Container>
  );
};

export default LandingPage; 