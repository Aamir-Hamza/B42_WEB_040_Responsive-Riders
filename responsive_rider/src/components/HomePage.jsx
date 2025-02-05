import { Trophy, Award, Timer, Users, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <header className="bg-indigo-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Revolutionize Learning with Gamification!</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Join EduGameQuest and transform the way you learn with interactive quizzes, exciting challenges, and rewards that keep you motivated.
        </p>
        <div className="mt-6 space-x-4">
          <button onClick={() => navigate('/register')} className="bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600">Get Started</button>
          <button onClick={() => navigate('/login')} className="bg-white text-indigo-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-100">Log In</button>
        </div>
      </header>

      {/* Why Choose EduGameQuest? */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose EduGameQuest?</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Gamification makes learning fun and engaging! Earn rewards, challenge your friends, and track your progress like never before.
        </p>
      </section>

      {/* Feature Highlights */}
      <section className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Timer className="text-indigo-600 w-12 h-12 mx-auto mb-4" />
          <h3 className="font-semibold text-lg">Interactive Quizzes</h3>
          <p className="text-gray-600">Test your knowledge with exciting quizzes designed to keep you engaged.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Award className="text-yellow-500 w-12 h-12 mx-auto mb-4" />
          <h3 className="font-semibold text-lg">Earn Badges & Rewards</h3>
          <p className="text-gray-600">Stay motivated with badges, trophies, and level-ups as you learn.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Users className="text-green-500 w-12 h-12 mx-auto mb-4" />
          <h3 className="font-semibold text-lg">Compete on Leaderboards</h3>
          <p className="text-gray-600">Challenge your friends and climb the leaderboard by earning more points.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Sparkles className="text-purple-500 w-12 h-12 mx-auto mb-4" />
          <h3 className="font-semibold text-lg">AI-Powered Learning</h3>
          <p className="text-gray-600">Get personalized quiz recommendations based on your performance.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-indigo-50 text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic text-gray-700">"This app made learning so much more fun! The quizzes feel like a game, and I love earning badges."</p>
            <h4 className="mt-4 font-semibold">- Sarah L.</h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic text-gray-700">"Competing with my friends on the leaderboard keeps me motivated to study every day!"</p>
            <h4 className="mt-4 font-semibold">- Jake P.</h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic text-gray-700">"The AI recommendations helped me improve in areas where I was struggling. Great app!"</p>
            <h4 className="mt-4 font-semibold">- Priya R.</h4>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Level Up Your Learning?</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Sign up now and start earning rewards while mastering new topics!
        </p>
        <div className="mt-6">
          <button onClick={() => navigate('/register')} className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700">Join Now</button>
        </div>
      </section>
    </div>
  );
}
