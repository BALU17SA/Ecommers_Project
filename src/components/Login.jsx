import React, { useState } from "react";
import Register from './Register';

const Login = ({ setUser }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [regPage, setRegPage] = useState(false);
  const [error, setError] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();

    if (!name || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    localStorage.setItem("username", name);
    setUser(name);
  };

  return (
    <>
      {!regPage ? (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-200 to-pink-200">
          <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">Login</h2>
            <form onSubmit={loginHandler}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  User Name
                </label>
                <input
                  type="text"
                  id="username"
                  className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${error && !name ? 'border-red-500' : ''}`}
                  placeholder="Enter User Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {error && !name && <p className="text-red-500 text-sm mt-1">{error}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${error && !password ? 'border-red-500' : ''}`}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && !password && <p className="text-red-500 text-sm mt-1">{error}</p>}
              </div>

              <div className="flex justify-between items-center mb-6">
                <label htmlFor="remember" className="flex items-center text-sm text-gray-600">
                  <input type="checkbox" id="remember" className="mr-2" />
                  Remember Me
                </label>
                <a href="#" className="text-sm text-purple-600 hover:text-purple-700">
                  Forgot Password?
                </a>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-300"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="mt-6 text-center">
              <span className="text-gray-600">Don't have an Account?</span>
              <button
                className="ml-2 text-purple-600 hover:text-purple-700 font-semibold"
                onClick={() => setRegPage(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Register setRegPage={setRegPage} />
      )}
    </>
  );
};

export default Login;
