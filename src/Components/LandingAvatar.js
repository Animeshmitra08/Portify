import React from 'react';
import { motion } from 'framer-motion';

const LandingAvatar = () => {
  return (
    <>
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-slate-50 w-[150px] rounded-md p-2 absolute shadow-lg right-[80px] top-[80px] drpdwn border-gray-500 border-[1px]">
        <ul className="flex flex-col gap-1">
            <li>Profile</li>
            <hr/>
            <li>Settings</li>
            <hr/>
            <li>Logout</li>
        </ul>
        </motion.div>
    </>
  )
}

export default LandingAvatar