import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import PetInfo from './pages/PetInfo';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Registration from './pages/Registration';
import { userContext } from './context/UserContextProvider';

function App() {
  const { User, setUser } = useContext(userContext);

  const PublicRoute = ({ element }) => {
    return User ? <Navigate to="/" /> : element;
  };

  const PrivateRoute = ({ element }) => {
    return User ? element : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<PublicRoute element={<Login />} />} />
        <Route path="/register" element={<PublicRoute element={<Registration />} />} />
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route path="/pet/:id" element={<PrivateRoute element={<PetInfo />} />} />
        <Route path="/profile/:id" element={<PrivateRoute element={<Profile />} />} />
      </Routes>
    </Router>
  );
}

export default App;
