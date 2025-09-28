'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Countdown
  useEffect(() => {
    const calculateDays = () => {
      const weddingDate = new Date('2025-12-13T11:00:00Z');
      const today = new Date();
      const diffTime = weddingDate.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysLeft(diffDays);
    };
    calculateDays();
    const interval = setInterval(calculateDays, 60000);
    return () => clearInterval(interval);
  }, []);

  // Music toggle
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="font-body text-gray-800 overflow-x-hidden">
      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source src="/audio/the-best-part.mp3" type="audio/mpeg" />
      </audio>

      {/* Floating Music Button (Top Right) */}
      <button
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 bg-rose-gold text-white p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Play our song"
      >
        {isPlaying ? '⏸️' : '▶️'}
      </button>

      {/* Floating Cash Gift Button (Bottom Right) */}
      <Link href="/donate" aria-label="Cash Gift">
        <div className="fixed bottom-6 right-6 z-50 bg-burgundy text-white p-4 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 animate-pulse group">
          <div className="flex flex-col items-center">
            <span className="text-xl">💝</span>
            <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Cash Gift
            </span>
          </div>
        </div>
      </Link>

      {/* Hero Section — Fullscreen, Zoomed Out, Top-Aligned */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-top bg-no-repeat overflow-hidden"
        style={{ 
          backgroundImage: 'url(/images/hero_modified.webp)',
          backgroundPosition: 'top center',
          backgroundSize: '100% auto'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto opacity-0 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 leading-tight">
            Victoria & Jude
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 italic">Invite you to witness our union</p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 inline-block mb-8">
            <p className="text-2xl md:text-4xl font-semibold">
              {daysLeft} days to forever
            </p>
          </div>
          <button
            onClick={() => {
                document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block bg-rose-gold hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 animate-bounce"
          >
            Scroll to Details
          </button>
        </div>
      </section>

      {/* Invitation Details */}
      <section id="details" className="py-20 px-6 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-burgundy">You’re Invited</h2>
          <div className="bg-rose-gold/10 p-8 rounded-lg">
            <p className="text-lg md:text-xl mb-2">📅 <strong>Saturday, December 13, 2025</strong></p>
            <p className="text-lg md:text-xl mb-2">⏰ <strong>11:00 AM (GMT)</strong></p>
            <p className="text-lg md:text-xl mb-2">⛪ <strong>Providence Baptist Church</strong></p>
            <p className="text-sm md:text-base mb-4">📍 Along Iyana-Church General Gas Road, Ibadan, Oyo State, Nigeria</p>
            <p className="text-lg md:text-xl font-medium">🎀 <em>Dress Code: Burgundy Wine, Rose Gold & Mauve Attire</em></p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-mauve/10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-heading font-bold mb-8 text-burgundy">Our Love Story</h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto opacity-0 animate-fade-in-up">
            We were study buddies first — passing notes, sharing laughs, building a friendship that quietly grew into love.  
            Through every season, we’ve chosen each other, again and again.  
            Now, as we stand at the threshold of forever, we’re ready to say “I do” —  
            not just to marriage, but to a lifetime of choosing us.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center text-burgundy">Our Moments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['/images/couple4_modified.webp', '/images/couple1_modified.webp', '/images/couple2_modified.webp', '/images/couple3_modified.webp', '/images/couple5_modified.webp'].map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-lg shadow-lg group">
                <img
                  src={src}
                  alt={`Couple moment ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
<section className="py-20 px-6 bg-mauve/10 text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-heading font-bold mb-8 text-burgundy">📍 Find Us</h2>
    <div className="aspect-video max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg mb-6">
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7912.7491177457905!2d3.967494!3d7.423735000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ecb5fbf5826b%3A0x514422d1871d0285!2sProvidence%20Baptist%20Church!5e0!3m2!1sen!2sng!4v1758712141696!5m2!1sen!2sng" 
      width="100%" 
      height="100%" 
      style={{border: 0}} 
      allowFullScreen 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">

      </iframe>
    </div>

    {/* Get Directions Button */}
    <a
      href="https://www.google.com/maps/dir/?api=1&destination=7.425852019426211, 3.967804966999824"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-rose-gold hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-full shadow-md transition-all duration-300 hover:scale-105"
    >
      🗺️ Get Directions
    </a>
    <p className="text-sm text-gray-600 mt-4">
      Opens in Google Maps — perfect for mobile navigation
    </p>
  </div>
</section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-burgundy text-white text-center">
        <p className="text-xl">
            Thank you for being part of our forever ❤️
            We can't wait to celebrate with you
        </p>
      </footer>
    </div>
  );
}