import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react'; // Import a specific icon

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Welcome to the Future of Learning
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-4xl">
          Revolutionize your learning with gamification! Complete quizzes, unlock badges, and compete in challenges to level up. Join now to start your journey!
        </p>
        <Link to="/register">
          <button className="bg-yellow-500 text-black text-lg px-8 py-3 rounded-full hover:bg-yellow-600 transition-all duration-300 flex items-center gap-2">
            Get Started
            <ArrowRight size={20} /> {/* Add an icon */}
          </button>
        </Link>
      </div>

      {/* Key Features Section */}
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-white font-semibold mb-8">Key Features</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-white">
            <div>
              <h3 className="text-xl font-semibold mb-3">Interactive Quizzes</h3>
              <p>Engage in exciting quizzes with instant feedback, challenges, and a timer to push your limits.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Badges & Rewards</h3>
              <p>Earn trophies, points, and badges as you complete quizzes and challenges. Show off your achievements!</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Leaderboards</h3>
              <p>See how you stack up against your peers with real-time leaderboards and track your progress.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-purple-600 to-indigo-500 text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Ready to Level Up?</h2>
        <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
          Join our community of learners who are transforming education into a fun and competitive experience. Start your journey today!
        </p>
        <Link to="/register">
          <button className="bg-yellow-500 text-black text-lg px-8 py-3 rounded-full hover:bg-yellow-600 transition-all duration-300">
            Sign Up Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
