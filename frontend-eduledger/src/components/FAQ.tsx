import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "O que é a plataforma eduLedger?",
      answer: "A eduLedger é uma plataforma educacional que oferece quizzes, materiais sobre notícias do mercado e muito mais."
    },
    {
      question: "Como posso me inscrever?",
      answer: "Você pode se inscrever clicando no botão de login e seguindo as instruções."
    },
    {
      question: "Os quizzes são gratuitos?",
      answer: "Sim, todos os quizzes disponíveis na plataforma são gratuitos."
    },
    {
      question: "Como posso entrar em contato com o suporte?",
      answer: "Você pode entrar em contato com o suporte através do e-mail suporte@eduleger.com."
    }
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dúvidas Frequentes</h1>
      {faqs.map((faq, index) => (
        <div key={index} style={{ marginBottom: '1rem' }}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;