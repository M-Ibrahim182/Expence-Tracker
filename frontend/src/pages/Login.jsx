import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    const userData = { name, about };
    localStorage.setItem('userData', JSON.stringify(userData));
    
    navigate('/');
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 font-medium mb-2">Name:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="about" className="block text-gray-600 font-medium mb-2">About You:</label>
            <input
              id="about"
              type="text"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
