/* eslint-disable react/prop-types */
import { Clock } from 'lucide-react';

const QuizQuestion = ({ question, currentQuestion, totalQuestions, timeLeft, selectedAnswer, onAnswerSelect }) => {
  return (
    <div className="relative z-10 min-h-[400px] bg-gray-800/90 p-8 rounded-xl shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Clock className="w-5 h-5 text-white mr-2" />
          <span className="text-white font-medium">
            Time Left: {timeLeft}s
          </span>
        </div>
        <div className="text-white">
          Question {currentQuestion + 1}/{totalQuestions}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl text-white font-medium mb-4">
          {question.question}
        </h3>
        <div className="grid grid-cols-1 gap-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswerSelect(option)}
              disabled={selectedAnswer !== null}
              className={`p-4 rounded-lg text-left transition-all transform hover:scale-105 ${
                selectedAnswer === null
                  ? 'bg-gray-700 text-white hover:bg-gray-600'
                  : selectedAnswer === option
                  ? option === question.correctAnswer
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                  : option === question.correctAnswer && selectedAnswer !== null
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-700 text-white'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;