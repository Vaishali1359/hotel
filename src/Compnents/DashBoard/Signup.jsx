import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.find((user) => user.email === formData.email)) {
      alert('User already exists.');
      return;
    }

    users.push(formData);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Signup successful. You can now log in.');
    navigate('/login');
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
        onSubmit={handleSignup}
        className="bg-white bg-opacity-10 backdrop-blur-lg text-white p-8 rounded-xl shadow-xl w-full max-w-sm"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-white bg-opacity-20 placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-white bg-opacity-20 placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-white bg-opacity-20 placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-white bg-opacity-20 placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white py-2 rounded transition"
        >
          Create Account
        </button>

        <p className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link to="/login" className="underline text-green-200 hover:text-white">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
