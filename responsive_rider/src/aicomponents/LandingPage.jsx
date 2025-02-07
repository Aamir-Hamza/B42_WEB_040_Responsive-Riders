import { useState } from 'react';
import { Link } from 'react-router-dom';
import { loadSlim } from "@tsparticles/slim";
import { loadCircleShape } from "@tsparticles/shape-circle";
import ParticlesComponent from "../ParticlesComponent";
import Confetti from 'react-confetti';
import { 
  Trophy, 
  Zap, 
  BookOpen, 
  Users, 
  ArrowRight 
} from 'lucide-react';

// Import all images
import heroImage from '../images/hero-image.png';
import backgroundImage from '../images/bg-image.png';
import quizImage from '../images/quiz-image.png';
import rewardsImage from '../images/rewards-image.png';
import leaderboardImage from '../images/leaderboard-image.png';
import aiSuggestionsImage from '../images/ai-suggestions-image.png';

const LandingPage = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  const width = window.innerWidth;
  const height = window.innerHeight;

  const particlesInit = async (engine) => {
    await loadSlim(engine);
    await loadCircleShape(engine);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const featureData = [
    {
      icon: <BookOpen className="w-12 h-12 text-purple-500" />,
      title: "Interactive Quizzes",
      description: "Engaging quizzes with real-time feedback and dynamic challenges.",
      image: quizImage,
      link: "/quizzes"
    },
    {
      icon: <Trophy className="w-12 h-12 text-yellow-500" />,
      title: "Unlock Achievements",
      description: "Earn badges, trophies, and points as you progress.",
      image: rewardsImage,
      link: "/rewards"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Climb the Ranks",
      description: "Compete with others and track your progress on the leaderboard.",
      image: leaderboardImage,
      link: "/leaderboard"
    },
    {
      icon: <Zap className="w-12 h-12 text-green-500" />,
      title: "Personalized Learning",
      description: "Get AI-driven quiz recommendations tailored to your needs.",
      image: aiSuggestionsImage,
      link: "/ai-suggestions"
    }
  ];

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="absolute inset-0 bg-purple-900/30 backdrop-blur-md"></div>

      <div className="relative z-10">
        <ParticlesComponent 
          id="tsparticles" 
          init={particlesInit} 
          loaded={particlesLoaded} 
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 120,
            particles: {
              color: { value: "#ffffff" },
              opacity: { value: 0.3 },
              size: { value: { min: 1, max: 3 } },
            },
          }} 
        />
        <Confetti width={width} height={height} numberOfPieces={200} recycle={false} />

        {/* Hero Section */}
        <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center relative">
          <div className="space-y-6 order-2 md:order-1">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Level Up Your Learning
            </h1>
            <p className="text-lg text-white">
              Transform education into an epic journey of discovery and achievement.
            </p>
            <div className="flex space-x-4">
              <Link 
                to="/register" 
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-6 py-3 rounded-full flex items-center transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your Quest <ArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
          <div className="relative order-1 md:order-2 flex justify-center">
            <img 
              src={heroImage} 
              alt="Learning Hero" 
              className="max-w-full md:max-w-md h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Discover Our Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureData.map((feature, index) => (
              <div 
                key={index}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
                className={`
                  bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center transform transition-all duration-300
                  ${activeFeature === index ? 'scale-105 shadow-2xl' : 'hover:scale-105'}
                `}
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="mx-auto mb-4 rounded-lg max-h-40 object-cover"
                />
                <Link 
                  className="text-purple-400 hover:text-purple-300 flex items-center justify-center"
                >
                  Explore <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-black/20 py-6 text-center relative z-20">
          <p>&copy; {new Date().getFullYear()} EduQuiz. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;