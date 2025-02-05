import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './context/ProtectedRoute';
import DashBoard from './components/DashBoard';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  return (
    <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/dashboard" element={<ProtectedRoute><DashBoard /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    </AuthProvider>
  );
}

export default App;
