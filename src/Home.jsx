import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import { motion } from 'motion/react'

const Home = () => {
    const navigate = useNavigate();
    const container = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }
    return (
        <div className='bg-slate-950 h-screen'>
            <Navbar />
            <main>
                <div className="text-white grid grid-cols-1 md:grid-cols-2 px-6 md:px-16 pt-28 md:pt-15 pb-16 md:pb-0 gap-10 md:gap-6">
                    {/* <!-- left --> */}
                    <div className="h-full flex flex-col justify-center order-2 md:order-1">
                        <motion.h1
                            variants={container} initial="hidden" animate="visible" transition={{ duration: 0.5 }}
                            className="text-3xl sm:text-4xl md:text-5xl mt-0 md:mt-0 mb-6 md:mb-10">Agentic Tutor</motion.h1>
                        <motion.p
                            variants={container} initial="hidden" animate="visible" transition={{ duration: 1 }}
                            className="text-sm sm:text-base"><span className='text-red-500'>Master Dsa with 150 Questions</span> Covering All Patterns. Our interactive e-learning platform transforms complex Data Structures and Algorithms problems into fun, bite-sized visual challenges. Guided by an interactive cartoon avatar who coaches, motivates, and adapts to your unique learning paces.
                        </motion.p>
                        <motion.div
                            variants={container} initial="hidden" animate="visible" transition={{ duration: 1 }}
                            className="flex flex-wrap gap-4 md:gap-0">
                            <Link
                                to="/op"
                                className="whitespace-nowrap px-4 py-2 rounded-lg text-lg font-medium transition-all duration-200 border bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-850 my-8">Get Started
                            </Link>
                        </motion.div>
                    </div>
                    {/* <!-- right --> */}
                    <motion.div
                        variants={container} initial="hidden" animate="visible" transition={{ duration: 1 }}
                        className="h-full flex items-center justify-center order-1 md:order-2">
                        <img src="tutor-photoroom.png" alt='' className="h-64 sm:h-80 md:h-[100px] lg:h-[400px] rounded-2xl" />
                    </motion.div>
                </div>
            </main>
        </div>
    )
}

export default Home
