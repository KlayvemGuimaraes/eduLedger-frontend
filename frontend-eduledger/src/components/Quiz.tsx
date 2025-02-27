import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import quizzesData from '../data/quizzes.json';

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
  max-width: 800px;
  text-align: center;
`;

const Question = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const OptionButton = styled.button<{ isCorrect?: boolean; isWrong?: boolean }>`
  display: block;
  width: 100%;
  margin: 0.5rem 0;
  padding: 1rem;
  background-color: ${(props) => (props.isCorrect ? '#28a745' : props.isWrong ? '#dc3545' : '#0070f3')};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.25rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.isCorrect ? '#218838' : props.isWrong ? '#c82333' : '#005bb5')};
  }
`;

const Score = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const RestartButton = styled.button`
  padding: 1rem;
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

const Quiz: React.FC = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (quizId && quizzesData.quizzes[quizId]) {
      setQuestions(quizzesData.quizzes[quizId]);
      setLoading(false);
    }
  }, [quizId]);

  const handleAnswerOptionClick = (answer: string) => {
    setSelectedOption(answer);
    setTimeout(() => {
      if (answer === questions[currentQuestion].answer) {
        setScore(score + 1);
      }

      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
      setSelectedOption(null);
    }, 1000);
  };

  if (loading) {
    return (
      <Container>
        <Card>Carregando...</Card>
      </Container>
    );
  }

  return (
    <Container>
      {showScore ? (
        <Card>
          <Score>Você acertou {score} de {questions.length} perguntas!</Score>
          <RestartButton onClick={() => {
            setShowScore(false);
            setCurrentQuestion(0);
            setScore(0);
          }}>
            Reiniciar Quiz
          </RestartButton>
        </Card>
      ) : (
        <Card>
          {questions.length > 0 ? (
            <>
              <Question>{questions[currentQuestion].question}</Question>
              <div>
                {questions[currentQuestion].options.map((option, index) => (
                  <OptionButton
                    key={index}
                    onClick={() => handleAnswerOptionClick(option)}
                    isCorrect={selectedOption === option && option === questions[currentQuestion].answer}
                    isWrong={selectedOption === option && option !== questions[currentQuestion].answer}
                  >
                    {option}
                  </OptionButton>
                ))}
              </div>
            </>
          ) : (
            <div>Nenhuma pergunta disponível.</div>
          )}
        </Card>
      )}
    </Container>
  );
};

export default Quiz;