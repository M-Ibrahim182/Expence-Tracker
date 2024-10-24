import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Income from './pages/Income';
import Expenses from './pages/Expense';
import Analytics from './pages/Analytics';
import Profile from './pages/Profile';
// import Login from './pages/Login';

const App = () => {
  const location = useLocation();
  
 
  return (
    <div className="flex">
     <Sidebar />
      <div className="flex-1">
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="Expence-Tracker" element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="analytics" element={<Analytics />} />
          {/* <Route path="profile" element={<Profile />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default App;