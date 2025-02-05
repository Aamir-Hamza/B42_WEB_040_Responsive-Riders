import { useState } from "react";
import axios from "axios";
import { 
  Mail, 
  Lock, 
  Gamepad2, 
  Rocket,
  AlertCircle,
  UserPlus
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [loginData, setLoginData] = useState({
    userEmail: "",
    userPassword: ""
  });
  
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!loginData.userEmail || !loginData.userPassword) {
      setError("⚠️ Please enter both email and password");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.get(
        "https://educationalgame-15240-default-rtdb.asia-southeast1.firebasedatabase.app/userDetails.json"
      );
      
      const users = response.data ? Object.values(response.data) : [];
      const matchedUser = users.find(
        user => 
          user.userEmail === loginData.userEmail && 
          user.userPassword === loginData.userPassword
      );

      if (matchedUser) {
        localStorage.setItem('user', JSON.stringify(matchedUser));
        navigate('/dashboard');
      } else {
        setError("❌ Invalid email or password");
      }
    } catch (error) {
      console.error(error);
      setError("❌ Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    setError("");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 to-purple-900 p-6">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-lg w-full border-4 border-blue-500 transform transition duration-300 hover:scale-[1.01]">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Gamepad2 className="w-8 h-8 text-blue-700" />
          <h2 className="text-3xl font-extrabold text-center text-blue-700">
            Learning Adventure Login
          </h2>
        </div>
        
        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-100 border border-red-400 flex items-center gap-2 text-red-700">
            <AlertCircle className="w-5 h-5" />
            <span>{error}</span>
          </div>
        )}
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 w-5 h-5 text-blue-500" />
            <input
              onChange={handleChange}
              value={loginData.userEmail}
              name="userEmail"
              type="email"
              placeholder="Enter your Email"
              className="w-full pl-10 pr-4 py-3 border border-blue-400 rounded-lg focus:ring-4 focus:ring-blue-500 focus:outline-none transition duration-300"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3.5 w-5 h-5 text-blue-500" />
            <input
              onChange={handleChange}
              value={loginData.userPassword}
              name="userPassword"
              type="password"
              placeholder="Enter your Password"
              className="w-full pl-10 pr-4 py-3 border border-blue-400 rounded-lg focus:ring-4 focus:ring-blue-500 focus:outline-none transition duration-300"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 mt-4 text-lg font-bold bg-blue-600 text-white rounded-lg transition duration-300 flex items-center justify-center gap-2 transform
              ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700 hover:scale-105'}`}
          >
            <Rocket className="w-5 h-5" />
            {isLoading ? 'Logging In...' : 'Start Learning'}
          </button>

          <div className="text-center mt-4">
            <Link 
              to="/register" 
              className="text-blue-600 hover:underline flex items-center justify-center gap-2"
            >
              <UserPlus className="w-5 h-5" />
              New User? Register Here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}