import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Income from './pages/Income';
import Expenses from './pages/Expense';
import Analytics from './pages/Analytics';
import Profile from './pages/Profile';
import Login from './pages/Login';

const App = () => {
  // Check if the user is logged in by checking localStorage
  const isLoggedIn = () => {
    return localStorage.getItem('userData') !== null;
  };

  return (
    <div className="flex">
      {isLoggedIn() && <Sidebar />} {/* Show sidebar only if user is logged in */}
      <div className="flex-1">
        <Routes>
          {/* Public Route for Login */}
          <Route path="/login" element={isLoggedIn() ? <Navigate to="/" /> : <Login />} />

          {/* Protected Routes */}
          <Route path="/" element={isLoggedIn() ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/income" element={isLoggedIn() ? <Income /> : <Navigate to="/login" />} />
          <Route path="/expenses" element={isLoggedIn() ? <Expenses /> : <Navigate to="/login" />} />
          <Route path="/analytics" element={isLoggedIn() ? <Analytics /> : <Navigate to="/login" />} />
          <Route path="/profile" element={isLoggedIn() ? <Profile /> : <Navigate to="/login" />} />

          {/* Catch-all Route for unmatched paths */}
          <Route path="*" element={<Navigate to={isLoggedIn() ? "/" : "/login"} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
