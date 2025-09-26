'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function AdminDashboard() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Check auth
  useEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem('admin-auth')) {
      router.push('/admin');
    }
  }, [router]);

  // Fetch messages
  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching messages:', error);
      } else {
        setMessages(data || []);
      }
      setLoading(false);
    };

    fetchMessages();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('admin-auth');
    router.push('/admin');
  };

  if (typeof window !== 'undefined' && !localStorage.getItem('admin-auth')) {
    return null;
  }

  return (
    <div className="min-h-screen bg-mauve/5 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-heading font-bold text-burgundy">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-rose-gold hover:bg-opacity-90 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-burgundy mb-6">Guest Messages ({messages.length})</h2>

          {loading ? (
            <p className="text-gray-600">Loading messages...</p>
          ) : messages.length === 0 ? (
            <p className="text-gray-600">No messages yet.</p>
          ) : (
            <div className="space-y-6">
              {messages.map((msg) => (
                <div key={msg.id} className="border-l-4 border-rose-gold pl-4 py-2">
                  <p className="font-medium">{msg.name}</p>
                  <p className="text-gray-700 mt-1">{msg.message}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {new Date(msg.created_at).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}