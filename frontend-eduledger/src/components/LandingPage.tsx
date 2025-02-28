import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import brazilFlag from '../assets/brazil-flag.png';
import usaFlag from '../assets/usa-flag.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 2rem;
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
  align-items: flex-start;
  gap: 4rem;
`;

const CountryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 300px;
`;

const Flag = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 1rem;
`;

const BarContainer = styled.div`
  width: 100%;
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

const Description = styled.p`
  font-size: 1rem;
  color: #ccc;
  margin-top: 1rem;
`;

const Footer = styled.footer`
  width: 100%;
  padding: 2rem 0;
  background-color: #000;
  color: #fff;
  text-align: center;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: #0070f3;
  }
`;

const FooterText = styled.p`
  font-size: 0.875rem;
  color: #666;
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
        <ComparisonTitle>Investimento em Criptomoedas</ComparisonTitle>
        <ComparisonContainer>
          <CountryContainer>
            <Flag src={brazilFlag} alt="Bandeira do Brasil" />
            <BarContainer>
              <Bar percentage={7} />
            </BarContainer>
            <p>Brasil: 7%</p>
            <Description>
              No Brasil, 7% da população investe em criptomoedas. A alta inflação e a desconfiança no sistema financeiro tradicional impulsionam o interesse por alternativas como o Bitcoin.
            </Description>
          </CountryContainer>
          <CountryContainer>
            <Flag src={usaFlag} alt="Bandeira dos EUA" />
            <BarContainer>
              <Bar percentage={14} />
            </BarContainer>
            <p>EUA: 14%</p>
            <Description>
              Nos EUA, 14% da população investe em criptomoedas. A maior familiaridade com tecnologias financeiras e o acesso a plataformas de investimento contribuem para esse número.
            </Description>
          </CountryContainer>
        </ComparisonContainer>
      </ComparisonSection>
      <Footer>
        <FooterLinks>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/quiz-selection">Quiz</FooterLink>
          <FooterLink to="/flashcards">Flash Cards</FooterLink>
          <FooterLink to="/faq">FAQ</FooterLink>
          <FooterLink to="/login">Conectar Carteira</FooterLink>
        </FooterLinks>
        <FooterText>&copy; 2025 EduLedger. Todos os direitos reservados.</FooterText>
      </Footer>
    </Container>
  );
};

export default LandingPage;