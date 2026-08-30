import React, { useState, useRef, useEffect } from 'react'
import Navbar from './Navbar'
import { motion } from 'motion/react';
import a1 from './a1.wav';
import a2 from './a2.wav';

const Learning = () => {
  const [posi, setPosi] = useState([0, 0]);
  const [state, setState] = useState(0);
  const [text, setText] = useState("");
  const [btn, setBtn] = useState("Start Learning")
  const [aud, setAud] = useState(null);
  const audioRef = useRef(null);


  const handleclick = () => {
    if (state === 0) {
      setPosi([-475, 0])
      setText("Hi, we have a collection of 150+ questions covering all the important patterns of data structures and algorithms. Lets get started");
      setBtn("Next")
      setAud(a1)
    }
    else if (state === 1) {
      setText("Let's start with an easy question taken from Leetcode platform called 'Contains Duplicates'");
      setAud(a2)
      // play(a2);
    }
    setState(state + 1);
  }

  useEffect(() => {
    console.log(audioRef.current);
    // console.log(isPlaying);

    if (audioRef.current) {
      // 1. Pause any currently playing audio
      // audioRef.current.pause();
      // 2. Force the browser to load the new source file
      // audioRef.current.load();

      // 3. Play the new track if it's supposed to be playing
      audioRef.current.play().catch((error) => {
        console.log("Playback failed or interrupted:", error);
      });
    }
  }, [aud]);
  return (
    <div className='bg-slate-950 h-screen'>
      <audio ref={audioRef} src={aud} />
      <Navbar />

      {/* avatar */}
      <div className='absolute left-[575px] top-[80px]'>
        <div className='relative inline-block h-[400px] w-[400px]  transition-transform duration-500 ease-in-out'
          style={{
            transform: `translate(${posi[0]}px, ${posi[1]}px)`
          }}>
          <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className='absolute left-0 top-0' src="photopea/1.png" alt="" srcset="" />
          <motion.img initial={{ scaleY: 0 }} animate={{ scaleY: 0.7 }} transition={{ duration: 1, delay: 1 }} className='absolute left-0 top-0' src="photopea/2.png" alt="" />
          <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }} className='absolute left-[100px] top-[100px] h-[200px]' src="photopea/3.png" alt="" />
        </div>
      </div>

      {/* talking text */}
      {state > 0 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className='absolute left-[50px] top-[500px] w-[500px] px-4 py-2 rounded-lg text-lg font-medium transition-all duration-200 border bg-slate-900 border-slate-800 text-slate-400'>{text}</motion.div>}

      {/* visuals */}
      {state===1 && <div className='inline-block absolute h-[500px] w-[900px] left-[600px] top-[80px]'>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }}
          className='absolute left-[100px] top-0 text-white w-[600px] text-center'
        >
          <h1 className='text-5xl my-[100px]'>Master DSA</h1>
          <h1 className='text-5xl my-[100px]'>With 150 Questions</h1>
          <h1 className='text-5xl'>Covering All Patterns</h1>
        </motion.div>
      </div>}
      {state===2 && <div className='inline-block absolute h-[500px] w-[900px] left-[600px] top-[80px]'>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }}
          className='absolute left-[100px] top-0 text-white w-[600px] text-center'
        >
          <h1 className='text-5xl my-[100px]'>Contains Duplicates</h1>
          {/* <h1 className='text-5xl my-[100px]'>With 150 Questions</h1>
          <h1 className='text-5xl'>Covering All Patterns</h1> */}
        </motion.div>
      </div>}

      {/* next button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 2 }}
        className="flex flex-wrap gap-4 md:gap-0 my-[170px] absolute left-[700px] top-[470px]">
        <motion.div onClick={handleclick}
          className="mx-auto whitespace-nowrap px-4 py-2 rounded-lg text-lg font-medium transition-all duration-200 border bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-850 cursor-pointer">{btn}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Learning
