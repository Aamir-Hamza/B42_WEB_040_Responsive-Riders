import React from 'react';
import { Crown, Trophy, Medal } from 'lucide-react';

export function Leaderboard({ entries, currentUserId }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Leaderboard</h2>
      <div className="space-y-4">
        {entries.map((entry, index) => (
          <div
            key={entry.id}
            className={`
              flex items-center p-4 rounded-lg transition-colors
              ${entry.id === currentUserId ? 'bg-indigo-50' : 'hover:bg-gray-50'}
              ${index < 3 ? 'border-2 border-yellow-400' : 'border border-gray-100'}
            `}
          >
            <div className="flex items-center justify-center w-8 h-8 mr-4">
              {index === 0 && <Crown className="w-6 h-6 text-yellow-500" />}
              {index === 1 && <Trophy className="w-6 h-6 text-gray-400" />}
              {index === 2 && <Medal className="w-6 h-6 text-orange-500" />}
              {index > 2 && <span className="text-gray-600 font-semibold">{index + 1}</span>}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{entry.username}</h3>
              <p className="text-sm text-gray-600">Level {entry.level}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-indigo-600">{entry.points} pts</p>
              <p className="text-sm text-gray-500">{entry.badges} badges</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}