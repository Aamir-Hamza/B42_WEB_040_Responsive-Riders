import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { generateContent } from './geminie/generateContent';
import SubjectSelector from './SubjectSelector';
import QuizQuestion from './QuizQuestion';
import QuizResult from './QuizResult';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && quizStarted && !showResult && !loading) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult && quizStarted) {
      handleQuizEnd();
    }
  }, [timeLeft, showResult, loading, quizStarted]);

  const handleStartQuiz = async (selectedSubjects) => {
    setLoading(true);
    try {
      const prompt = `Generate 5 multiple choice questions in JSON format for the following subjects: ${selectedSubjects.join(', ')}. Each question should have 4 options and indicate the correct answer. Return ONLY the JSON without backticks or language specifiers.
      Example format:
      {
        "questions": [
          {
            "question": "What is 2+2?",
            "options": ["3", "4", "5", "6"],
            "correct_answer": "4"
          }
        ]
      }`;

      const result = await generateContent(prompt);
      const parsedQuestions = JSON.parse(result).questions.map(q => ({
        question: q.question,
        options: q.options,
        correctAnswer: q.correct_answer
      }));
      setQuestions(parsedQuestions);
      setQuizStarted(true);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
    setLoading(false);
  };

  const handleAnswer = (selectedOption) => {
    setSelectedAnswer(selectedOption);
    const correct = selectedOption === questions[currentQuestion].correctAnswer;
    
    if (correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setSelectedAnswer(null);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setTimeLeft(30);
      } else {
        handleQuizEnd();
      }
    }, 1000);
  };

  const handleQuizEnd = () => {
    setShowResult(true);
  };

  const resetQuiz = () => {
    setQuestions([]);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setTimeLeft(30);
    setSelectedAnswer(null);
    setQuizStarted(false);
  };

  if (loading) {
    return (
      <div className="relative z-10 min-h-[400px] bg-gray-800/90 p-8 rounded-xl shadow-xl flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
          <p className="text-white text-lg">Generating your quiz...</p>
        </div>
      </div>
    );
  }

  if (!quizStarted) {
    return <SubjectSelector onStartQuiz={handleStartQuiz} />;
  }

  if (showResult) {
    return (
      <QuizResult 
        score={score}
        totalQuestions={questions.length}
        onReset={resetQuiz}
      />
    );
  }

  return (
    <QuizQuestion
      question={questions[currentQuestion]}
      currentQuestion={currentQuestion}
      totalQuestions={questions.length}
      timeLeft={timeLeft}
      selectedAnswer={selectedAnswer}
      onAnswerSelect={handleAnswer}
    />
  );
};

export default Quiz;