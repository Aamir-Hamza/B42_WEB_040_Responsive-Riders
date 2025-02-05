import React from 'react';
import { Trophy, Star, Award } from 'lucide-react';

export function BadgeDisplay({ badge, isNew }) {
  const icons = {
    trophy: Trophy,
    star: Star,
    award: Award,
  };

  const IconComponent = icons[badge.icon] || Award;

  return (
    <div className="relative group">
      <div className={`
        p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all
        ${isNew ? 'animate-bounce' : ''}
      `}>
        <div className="flex flex-col items-center">
          <IconComponent className="w-12 h-12 text-yellow-500" />
          <h4 className="mt-2 font-semibold text-gray-800">{badge.name}</h4>
          <p className="text-sm text-gray-600 text-center mt-1">{badge.description}</p>
        </div>
      </div>

      {isNew && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          New!
        </span>
      )}
    </div>
  );
}
