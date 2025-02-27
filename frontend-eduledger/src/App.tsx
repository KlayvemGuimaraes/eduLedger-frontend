import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login.tsx';
import Quiz from './components/Quiz.tsx';
import QuizSelection from './components/QuizSelection.tsx';
import FAQ from './components/FAQ.tsx';
import Navbar from './components/Navbar.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/quiz-selection" element={<QuizSelection />} />
        <Route path="/quiz/:quizId" element={<Quiz />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
};

export default App;