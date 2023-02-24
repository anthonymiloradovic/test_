import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import quizQuestions from "../questions.json";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showEndScreen, setShowEndScreen] = useState(false);
  

useEffect(() => {
     generateNewQuestions();
    }, []);

    const generateNewQuestions = () => {
        const shuffledQuestions = quizQuestions.sort(() => Math.random() - 0.10);
        const selectedQuestions = shuffledQuestions.slice(0, 10);
        setQuestions(selectedQuestions);
    };

  const handleAnswer = (answer) => {
    const isCorrect = questions[currentQuestionIndex].answer === answer;
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowEndScreen(true);
    }
  };

  const replay = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setShowEndScreen(false);
    generateNewQuestions();
  };
 

  if (showEndScreen) {
    let message;
  if (score === questions.length) {
    message = `Bravo, vous avez répondu correctement à toutes les ${questions.length} questions !`;
  } else if (score >= 3) {
    message = `Tu as obtenu ${score} bonnes réponses sur ${questions.length}. Bien joué !`;
  } else {
    message = `Tu as obtenu seulement ${score} bonnes réponses sur ${questions.length}. T'es éclaté au sol !`;
  }
  
    return (
      <div className="container">
        <Navbar/>
        <h1>Quiz terminé</h1>
        <h3>
          {message}
        </h3>
        <button onClick={replay}>Rejouer</button>

      </div>
    );
  } else {
    
    const currentQuestion = questions[currentQuestionIndex];
    return (
        
      <div>
        <Navbar/>
        <h2>
          Question {currentQuestionIndex + 1} sur {questions.length}
        </h2>
        {currentQuestion ? (
          <div>
            <h3>{currentQuestion.text}</h3>
            {currentQuestion.choices.map((choice, index) => (
              <button key={index} onClick={() => handleAnswer(choice)}>
                {choice}
              </button>
            ))}
          </div>
        ) : (
          <div>Chargement des questions...</div>
        )}
      </div>
    );
  }
  
}

export default Quiz;
