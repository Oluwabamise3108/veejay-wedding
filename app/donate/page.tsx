'use client';

import Link from 'next/link';

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-rose-gold/5 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
        <Link href="/" className="text-burgundy hover:underline flex items-center gap-2 mb-6">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-heading font-bold text-burgundy mb-8 text-center">
          💝 Cash Gift for Our New Beginning
        </h1>

        <p className="text-lg text-gray-700 mb-8 text-center">
          Thank you for considering a gift as we begin our forever. Your generosity means the world to us.
        </p>

        <div className="space-y-8 mb-10">
          {/* Account 1 */}
          <div className="border border-rose-gold/30 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-burgundy mb-4">🏦 Naira Account 1</h3>
            <p><strong>Bank:</strong> Guaranty Trust Bank (GTB)</p>
            <p><strong>Account Name:</strong> Ezekiel Oluwabamise Jude</p>
            <p><strong>Account Number:</strong> <span className="font-mono bg-rose-gold/20 px-2 py-1 rounded">0148983332</span></p>
            <p><strong>Account Type:</strong> Savings</p>
          </div>

          {/* Account 2 */}
          <div className="border border-rose-gold/30 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-burgundy mb-4">🏦 Naira Account 2</h3>
            <p><strong>Bank:</strong> EcoBank</p>
            <p><strong>Account Name:</strong> Adika Kehinde Victoria</p>
            <p><strong>Account Number:</strong> <span className="font-mono bg-rose-gold/20 px-2 py-1 rounded">0631084531</span></p>
            <p><strong>Account Type:</strong> Savings</p>
          </div>
        </div>

        <div className="bg-rose-gold/10 p-6 rounded-lg text-center">
          <p className="text-lg mb-4">📲 <strong>Kindly notify us after transfer via WhatsApp:</strong></p>
          <p className="text-xl font-semibold">+234 818 434 0327, +234 818 059 9604</p>
          <p className="text-sm text-gray-600 mt-4">
            You may also leave us a private message — visible only to us.
          </p>
        </div>
      </div>
    </div>
  );
}