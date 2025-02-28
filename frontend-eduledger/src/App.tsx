import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quiz from './components/Quiz.tsx';
import QuizSelection from './components/QuizSelection.tsx';
import FAQ from './components/FAQ.tsx';
import Navbar from './components/Navbar.tsx';
import LandingPage from './components/LandingPage.tsx';
import Tutorial from './components/Tutorial/Tutorial.tsx';
import FlashcardPage from './components/FlashCards.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz-selection" element={<QuizSelection />} />
        <Route path="/quiz/:quizId" element={<Quiz />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/flashcards" element={<FlashcardPage />} />
      </Routes>
    </Router>
  );
};

export default App;