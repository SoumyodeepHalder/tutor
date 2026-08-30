import React from 'react'
import { motion } from 'motion/react'

const Experiment = () => {
    return (
        <div className='bg-slate-950 h-screen'>
            <motion.div className='relative h-[400px] w-[400px]'>
                <motion.img initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 1}} className='absolute left-0 top-0' src="photopea/1.png" alt="" srcset="" />
                <motion.img initial={{scaleY: 0}} animate={{scaleY: 0.7}} transition={{duration: 1, delay: 2}} className='absolute left-0 top-0' src="photopea/2.png" alt="" />
                <motion.img initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 3}} className='absolute left-[100px] top-[100px] h-[200px]' src="photopea/3.png" alt="" />
            </motion.div>
        </div>
    )
}

export default Experiment
