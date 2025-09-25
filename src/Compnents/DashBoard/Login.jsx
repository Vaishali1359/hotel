import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const found = users.find(
      (user) => user.email === email && user.password === password
    );

    if (found) {
      setIsAuthenticated(true);
      localStorage.setItem('auth', 'true');
      navigate('/');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1470&q=80)',
      }}
    >
      <form
        onSubmit={handleLogin}
        className="bg-white bg-opacity-10 backdrop-blur-lg text-black p-8 rounded-xl shadow-xl w-full max-w-sm"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Hotel Login</h2>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded bg-white bg-opacity-20 placeholder-white focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded bg-white bg-opacity-20 placeholder-white focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-black py-2 rounded transition"
        >
          Login
        </button>

        <p className="mt-4 text-center text-sm">
          Don’t have an account?{' '}
          <Link to="/signup" className="underline text-green-800 hover:text-red-500">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
