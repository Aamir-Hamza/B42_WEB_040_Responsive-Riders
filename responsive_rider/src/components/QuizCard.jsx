import React from 'react';
import { Timer, Award, ArrowRight } from 'lucide-react';

export function QuizCard({ quiz, onStart }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-800">{quiz.title}</h3>
        <span className="flex items-center text-sm text-gray-600">
          <Timer className="w-4 h-4 mr-1" />
          {quiz.timeLimit} min
        </span>
      </div>
      <div className="mb-4">
        <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
          {quiz.subject}
        </span>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center text-sm text-gray-600">
          <Award className="w-4 h-4 mr-1" />
          {quiz.questions.length} questions
        </div>
        <button
          onClick={() => onStart(quiz.id)}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Start Quiz
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
}
