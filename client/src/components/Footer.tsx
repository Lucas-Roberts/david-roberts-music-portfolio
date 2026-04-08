import React from 'react';

export default function Footer() {
  return (
    <div className="flex h-8 w-full bg-[#1f1f1f] text-white/40  justify-center items-center ">
      <span>source code for website</span>
      <a
        href="https://github.com/Lucas-Roberts/david-roberts-music-portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="underline ml-1 hover:text-white transition-colors duration-200"
      >
        here
      </a>
    </div>
  );
}
