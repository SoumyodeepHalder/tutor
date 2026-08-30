import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import { motion } from 'motion/react'

// Note: For a fully authentic look, we use inline SVG paths to recreate the unique 
// hand-drawn, thick blue portal waves flowing across the dark background.
export default function PortalSmashMenu() {
  const [activeOption, setActiveOption] = useState(0);
  const menuOptions = ['RESUME', 'ABOUT', 'SETTINGS', 'EXIT'];

  const navigate = useNavigate();
  const container ={
    hidden:{opacity:0, y:10},
    visible:{opacity:1, y:0, transition:{staggerChildren: 0.15}}
  }
  const item ={
    hidden:{opacity:0, y:10},
    visible:{opacity:1, y:0}
  }

  // Handle keyboard navigation (Arrow keys / Tab)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
        e.preventDefault();
        setActiveOption((prev) => (prev + 1) % menuOptions.length);
      } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
        e.preventDefault();
        setActiveOption((prev) => (prev - 1 + menuOptions.length) % menuOptions.length);
      } else if (e.key === 'Enter') {
        alert(`Selected: ${menuOptions[activeOption]}`);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeOption]);

  return (
    <div className="relative w-full h-screen bg-[#020916] text-white font-sans overflow-hidden flex flex-col justify-between items-center py-12 select-none">
      
      {/* Background Abstract Waves */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
        <svg className="w-full h-full" xmlns="http://w3.org" viewBox="0 0 1920 1080" preserveAspectRatio="none">
          {/* Top Left Curves */}
          <path d="M-100,200 C300,-100 200,400 600,100 C900,-100 1200,50 1400,-50" fill="none" stroke="#004cb3" strokeWidth="80" strokeLinecap="round" />
          <path d="M-50,350 C400,100 300,600 800,200" fill="none" stroke="#00398a" strokeWidth="50" strokeLinecap="round" />
          
          {/* Bottom Center-Right Flowing Loops */}
          <path d="M600,1150 C700,600 500,400 900,500 C1300,600 1100,1100 2100,650" fill="none" stroke="#004cb3" strokeWidth="95" strokeLinecap="round" />
          <path d="M750,1150 C820,750 680,550 950,620 C1250,700 1200,1050 2100,780" fill="none" stroke="#00398a" strokeWidth="45" strokeLinecap="round" />
        </svg>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow w-full max-w-4xl px-4 text-center">
        {/* Main Header Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-widest text-[#e2f1ff] drop-shadow-[0_0_15px_rgba(0,76,179,0.6)] mb-16 uppercase">
          TUTOR.AI
        </h1>
        {/* Menu Navigation List */}
        <motion.div
        variants={container} initial="hidden" animate="visible"
        className="flex flex-col space-y-6 md:space-y-8 my-auto">
          {menuOptions.map((option, index) => (
            <motion.button
              key={option}
              variants={item}
              onClick={() => {
                if(option==='RESUME')navigate('/lvl');
                else if(option==='ABOUT')navigate('/');
                else if(option==='SETTINGS')navigate('/');
                else if(option==='EXIT')navigate('/')
              }}
              onMouseEnter={() => setActiveOption(index)}
              className={`text-2xl md:text-4xl font-normal tracking-[0.25em] pl-[0.25em] uppercase transition-all duration-200 focus:outline-none block ${
                activeOption === index
                  ? 'text-white scale-115 drop-shadow-[0_0_12px_rgba(255,255,255,0.7)] font-medium'
                  : 'text-[#7ca2db]/70 hover:text-white/90'
              }`}
            >
              {option}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Navigation Help Footer Text */}
      <div className="relative z-10 w-full text-center px-4 space-y-2 mt-auto">
        <p className="text-xs md:text-sm tracking-widest text-[#5c7da8] font-light">
          Press Enter / Click to select
        </p>
        <p className="text-xs md:text-sm tracking-widest text-[#425e82] font-light">
          Press Tab / Arrow buttons to navigate
        </p>
      </div>

    </div>
  );
}
