'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'VictoriaJude2025!') {
      localStorage.setItem('admin-auth', 'true');
      router.push('/admin/dashboard');
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div className="min-h-screen bg-rose-gold/10 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-heading font-bold text-burgundy mb-6 text-center">
          Admin Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="password" className="block text-burgundy font-medium mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-rose-gold/30 rounded-lg focus:ring-2 focus:ring-rose-gold focus:border-transparent"
              required
            />
          </div>
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-burgundy hover:bg-opacity-90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}