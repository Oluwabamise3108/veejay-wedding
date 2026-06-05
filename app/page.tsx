'use client';

import { useState, useRef } from 'react';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Music toggle - Kept intact so guests can still hear "your song"
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

      {/* Floating Music Button */}
      <button
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 bg-rose-gold text-white p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Play our song"
      >
        {isPlaying ? '⏸️' : '▶️'}
      </button>

      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-top bg-no-repeat overflow-hidden"
        style={{ 
          // SWAP THIS PATH: Use your single best downloaded, wide-angle wedding photo here
          backgroundImage: 'url(/images/wedding_hero.webp)', 
          backgroundPosition: 'top center',
          backgroundSize: '100% auto'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto opacity-0 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 leading-tight">
            Victoria & Jude
          </h1>
          <p className="text-2xl md:text-4xl font-semibold mb-8">
            Thank you for celebrating with us.
          </p>
          <button
            onClick={() => {
                document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block bg-rose-gold hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 animate-bounce"
          >
            View Our Wedding Gallery
          </button>
        </div>
      </section>

      {/* Our Story (Preserved - this anchors the archive) */}
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

      {/* Gallery Highlight Reel & External Bridge */}
      <section id="gallery" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold mb-12 text-burgundy">Wedding Highlights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* THESE PATHS ARE SET. Ensure you have 12 files named exactly like this in your public/images folder */}
            {[
              '/images/highlight-1.webp', '/images/highlight-2.webp', '/images/highlight-3.webp', 
              '/images/highlight-4.webp', '/images/highlight-5.webp', '/images/highlight-6.webp',
              '/images/highlight-7.webp', '/images/highlight-8.webp', '/images/highlight-9.webp',
              '/images/highlight-10.webp', '/images/highlight-11.webp', '/images/highlight-12.webp'
            ].map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-lg shadow-lg group">
                <img
                  src={src}
                  alt={`Wedding highlight ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* THE BRIDGE: Now hardwired to your Google Photos album */}
          <a
            href="https://photos.app.goo.gl/k6ibAp9BeochPJ438"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-burgundy hover:bg-opacity-90 text-white font-medium py-4 px-10 rounded-full shadow-xl transition-all duration-300 hover:scale-105 text-lg"
          >
            📸 View & Download Full Wedding Gallery
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-burgundy text-white text-center">
        <p className="text-xl mb-2">Thank you for being part of our forever ❤️</p>
        <p className="text-xl text-rose-gold mb-2">• • •</p>
        <p className="text-xl">13.12.2025</p>
      </footer>
    </div>
  );
}