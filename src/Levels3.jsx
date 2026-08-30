import React, { useState } from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import { useNavigate} from 'react-router-dom'
import { motion } from 'motion/react'

export default function LevelSelection() {
  // Track the current active page (0 = first page dot, 1 = second, 2 = third)
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 3;

  const navigate = useNavigate();

  // Generate an array representing 50 levels for the current page display
  // Page 0: 1 to 50, Page 1: 51 to 100, etc.
  const startLevel = currentPage * 50 + 1;
  const levels = Array.from({ length: 50 }, (_, index) => startLevel + index);

  const container ={
    hidden:{opacity:0, y:10},
    visible:{opacity:1, y:0, transition:{staggerChildren: 0.01}}
  }
  const item ={
    hidden:{opacity:0, y:10},
    visible:{opacity:1, y:0}
  }

  const handlePrevPage = () => {
    if (currentPage>0)
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if(currentPage<2){
      setCurrentPage((prev) => prev + 1);
    }
  };
  return (
    <div className="min-h-screen bg-[#070b19] text-[#e2e8f0] font-sans flex flex-col justify-between select-none">
      <Navbar/>
      

      {/* Main Content Area Container */}
      <main className="flex-1 flex flex-col justify-center items-center w-full max-w-5xl mx-auto my-4">
        {/* Title Header */}
        <h1 className="text-xl sm:text-2xl font-light tracking-widest text-[#a0aec0] mb-6 sm:mb-8 text-center">
          Level Selection
        </h1>
        {/* Core Selector Grid Wrap */}
        <div className="w-full flex items-center justify-between gap-4 md:gap-8 relative px-2">
          
          {/* Left Arrow Controls */}
          <button 
            onClick={handlePrevPage}
            className="text-gray-400 hover:text-white transition-colors duration-200 p-2 text-3xl md:text-4xl font-extralight "
            aria-label="Previous Page"
          >
            &lt;
          </button>

          {/* Level Grid (10 columns on desktop/tablet, scales gracefully on mobile) */}
          <motion.div variants={container} initial="hidden" animate="visible" className="flex-1 grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2 sm:gap-3 max-w-4xl mx-auto w-full justify-items-center">
            {levels.map((level, idx) => {
              // Conditionally display labels only for the first two and last two cells
              
              return (
                <motion.button
                  key={level}
                  variants={item}
                  onClick={()=>navigate('/learning')}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#141b2d] hover:bg-[#1f293d] active:bg-[#2a374e] border border-transparent hover:border-gray-600 rounded-md flex items-center justify-center text-sm sm:text-base font-normal transition-all duration-200 focus:outline-none shadow-inner"
                >
                    <span className="text-[#a0aec0] font-light">{level}</span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Right Arrow Controls */}
          <button 
            onClick={handleNextPage}
            className="text-gray-400 hover:text-white transition-colors duration-200 p-2 text-3xl md:text-4xl font-extralight "
            aria-label="Next Page"
          >
            &gt;
          </button>
        </div>
      </main>
      {/* Footer Dots Pagination */}
      <footer className="w-full flex justify-center items-center gap-2 py-6">
        {Array.from({ length: totalPages }).map((_, dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => setCurrentPage(dotIndex)}
            className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
              currentPage === dotIndex 
                ? 'w-2 bg-[#63b3ed]' 
                : 'w-2 bg-[#4a5568] hover:bg-gray-400'
            }`}
            aria-label={`Go to page ${dotIndex + 1}`}
          />
        ))}
      </footer>
    </div>
  );
}
