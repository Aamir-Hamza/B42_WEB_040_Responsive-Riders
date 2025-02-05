import { useState } from "react";
import axios from "axios";
import { 
  User, 
  Cake, 
  Mail, 
  Lock, 
  GraduationCap, 
  Target,
  Gamepad2,
  Rocket,
  AlertCircle,
  LogIn
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Registration() {
  const [userData, setUserData] = useState({
    userName: "",
    userAge: "",
    userEmail: "",
    userPassword: "",
    userEducation: "",
    userGoals: "",
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function checkEmailExists(email) {
    try {
      const response = await axios.get(
        "https://educationalgame-15240-default-rtdb.asia-southeast1.firebasedatabase.app/userDetails.json"
      );
      
      if (response.data) {
        return Object.values(response.data).some(user => user.userEmail === email);
      }
      return false;
    } catch (error) {
      console.error("Error checking email:", error);
      throw new Error("Failed to check email");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    
    if (
      !userData.userName ||
      !userData.userAge ||
      !userData.userEducation ||
      !userData.userEmail ||
      !userData.userGoals ||
      !userData.userPassword
    ) {
      setError("⚠️ Please fill in all fields!");
      return;
    }

    try {
      setIsLoading(true);
      
      // Check if email exists
      const emailExists = await checkEmailExists(userData.userEmail);
      if (emailExists) {
        setError("❌ This email is already registered!");
        setIsLoading(false);
        return;
      }

      // If email doesn't exist, proceed with registration
      await axios.post(
        "https://educationalgame-15240-default-rtdb.asia-southeast1.firebasedatabase.app/userDetails.json",
        userData
      );
      
      alert("🎉 Registration Successful!");
      // Clear form after successful registration
      setUserData({
        userName: "",
        userAge: "",
        userEmail: "",
        userPassword: "",
        userEducation: "",
        userGoals: "",
      });
      
    } catch (error) {
      console.error(error);
      setError("❌ Registration Failed. Please try again!");
    } finally {
      setIsLoading(false);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setError(""); 
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 to-purple-900 p-6">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-lg w-full border-4 border-blue-500 transform transition duration-300 hover:scale-[1.01]">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Gamepad2 className="w-8 h-8 text-blue-700" />
          <h2 className="text-3xl font-extrabold text-center text-blue-700">
            Educational Gaming Hub
          </h2>
        </div>
        
        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-100 border border-red-400 flex items-center gap-2 text-red-700">
            <AlertCircle className="w-5 h-5" />
            <span>{error}</span>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-3.5 w-5 h-5 text-blue-500" />
            <input
              onChange={handleChange}
              value={userData.userName}
              name="userName"
              type="text"
              placeholder="Enter your Name"
              className="w-full pl-10 pr-4 py-3 border border-blue-400 rounded-lg focus:ring-4 focus:ring-blue-500 focus:outline-none transition duration-300"
            />
          </div>

          <div className="relative">
            <Cake className="absolute left-3 top-3.5 w-5 h-5 text-blue-500" />
            <input
              onChange={handleChange}
              value={userData.userAge}
              name="userAge"
              type="number"
              placeholder="Enter your Age"
              className="w-full pl-10 pr-4 py-3 border border-blue-400 rounded-lg focus:ring-4 focus:ring-blue-500 focus:outline-none transition duration-300"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3.5 w-5 h-5 text-blue-500" />
            <input
              onChange={handleChange}
              value={userData.userEmail}
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
              value={userData.userPassword}
              name="userPassword"
              type="password"
              placeholder="Enter your Password"
              className="w-full pl-10 pr-4 py-3 border border-blue-400 rounded-lg focus:ring-4 focus:ring-blue-500 focus:outline-none transition duration-300"
            />
          </div>

          <div className="relative">
            <GraduationCap className="absolute left-3 top-3.5 w-5 h-5 text-blue-500" />
            <input
              onChange={handleChange}
              value={userData.userEducation}
              name="userEducation"
              type="text"
              placeholder="Enter your Education"
              className="w-full pl-10 pr-4 py-3 border border-blue-400 rounded-lg focus:ring-4 focus:ring-blue-500 focus:outline-none transition duration-300"
            />
          </div>

          <div className="relative">
            <Target className="absolute left-3 top-3.5 w-5 h-5 text-blue-500" />
            <textarea
              onChange={handleChange}
              value={userData.userGoals}
              name="userGoals"
              placeholder="Enter your learning goals..."
              className="w-full pl-10 pr-4 py-3 border border-blue-400 rounded-lg focus:ring-4 focus:ring-blue-500 focus:outline-none transition duration-300 min-h-[100px]"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 mt-4 text-lg font-bold bg-blue-600 text-white rounded-lg transition duration-300 flex items-center justify-center gap-2 transform
              ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700 hover:scale-105'}`}
          >
            <Rocket className="w-5 h-5" />
            {isLoading ? 'Registering...' : 'Start Your Journey'}
          </button>
           <div className="text-center mt-4">
            <Link 
              to="/login" 
              className="text-blue-600 hover:underline flex items-center justify-center gap-2"
            >
              <LogIn className="w-5 h-5" />
              Already have an account? Login Here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}