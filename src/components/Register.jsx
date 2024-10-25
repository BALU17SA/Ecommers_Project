import React, { useState } from "react";

const Register = ({ setRegPage }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill in all the fields.");
      return;
    }

    alert("Your data is saved, now you can login.");
    setRegPage(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-200 to-pink-200">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">Sign Up</h2>
        <form onSubmit={signUp}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <span className="text-gray-600">Already have an Account?</span>
          <button
            className="ml-2 text-purple-600 hover:text-purple-700 font-semibold"
            onClick={() => setRegPage(false)}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
