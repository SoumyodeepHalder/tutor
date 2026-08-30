import React from 'react'
import {motion } from 'motion/react'

const Navbar = () => {
    return (
        <header className='bg-slate-900/50 border-b border-slate-800'>
            <div className='h-16 px-6 max-w-7xl mx-auto flex items-center justify-between'>
                    <motion.span className="font-bold text-4xl tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .5 }}
                    >
                        Tutor.Ai
                    </motion.span>
                    <div className='flex gap-3'>
                        <motion.button className="text-sm font-medium hover:bg-slate-800 text-slate-200 px-4 py-2 rounded-lg border border-slate-900/50 hover:border-slate-700 transition-all duration-200 shadow-sm"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .5 }}
                        >
                            Home
                        </motion.button>
                        <motion.button className="text-sm font-medium hover:bg-slate-800 text-slate-200 px-4 py-2 rounded-lg border border-slate-900/50 hover:border-slate-700 transition-all duration-200 shadow-sm"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .5 }}
                        >
                            About Us
                        </motion.button>
                    </div>
            </div>
        </header>
    )
}

export default Navbar
