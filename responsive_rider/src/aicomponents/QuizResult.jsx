/* eslint-disable react/prop-types */
import { Trophy } from 'lucide-react';

const QuizResult = ({ score, totalQuestions, onReset }) => {
  return (
    <div className="relative z-10 min-h-[400px] bg-gray-800/90 p-8 rounded-xl shadow-xl">
      <div className="text-center">
        <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-white mb-4">Quiz Completed!</h2>
        <div className="w-32 h-32 mx-auto mb-4">
          <div className="relative pt-1">
            <div className="overflow-hidden h-32 w-32 mx-auto relative">
              <div 
                className="absolute inset-0 border-8 border-blue-500 rounded-full"
                style={{
                  clipPath: `circle(${(score / totalQuestions) * 100}% at 50% 50%)`
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  {score}/{totalQuestions}
                </span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-xl text-gray-300 mb-4">
          You scored {(score / totalQuestions * 100).toFixed(0)}%
        </p>
        <button
          onClick={onReset}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default QuizResult;