import React, { useState } from 'react';
import { Sparkles, BookOpen } from 'lucide-react';
import { QuizCard } from './QuizCard';
import { BadgeDisplay } from './BadgeDisplay';
import { Leaderboard } from './Leaderboard';
import { quizzes, badges, leaderboard } from './types.js';

function DashBoard() {
  const [currentUserId] = useState('1');
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-indigo-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8" />
              <h1 className="text-2xl font-bold">EduQuest</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                Level 8
              </span>
              <span className="bg-indigo-500 px-3 py-1 rounded-full">1250 Points</span>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Available Quizzes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quizzes.map((quiz) => (
                <QuizCard key={quiz.id} quiz={quiz} onStart={(id) => console.log('Starting quiz:', id)} />
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <Leaderboard entries={leaderboard} currentUserId={currentUserId} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashBoard;