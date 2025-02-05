// types.js
export const quizzes = [
  {
    id: '1',
    title: 'Mathematics Fundamentals',
    subject: 'Math',
    timeLimit: 15,
    questions: Array(10).fill({}),
  },
  {
    id: '2',
    title: 'Science Quiz',
    subject: 'Science',
    timeLimit: 20,
    questions: Array(15).fill({}),
  },
];

export const badges = [
  {
    id: '1',
    name: 'Quick Learner',
    description: 'Complete 5 quizzes in under 10 minutes',
    icon: 'trophy',
    requirement: '5 quizzes',
  },
  {
    id: '2',
    name: 'Perfect Score',
    description: 'Achieve 100% in any quiz',
    icon: 'star',
    requirement: '100% score',
  },
];

export const leaderboard = [
  { id: '1', username: 'BrainMaster', points: 1250, level: 8, badges: 12 },
  { id: '2', username: 'QuizWhiz', points: 980, level: 6, badges: 8 },
  { id: '3', username: 'LearningPro', points: 850, level: 5, badges: 6 },
];
