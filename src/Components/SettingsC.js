import React from 'react'
import { motion } from "framer-motion";

const SettingsC = () => {
  return (
    <>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        className="absolute bg-slate-50 p-2 rounded-md shadow-lg left-11 bottom-3 w-[200px] border-gray-400 z-20 border-[1px]">
            <ul className="flex flex-col gap-2">
                <li>Profile</li>
                <hr />
                <li>Profile</li>
                <hr />
                <li>Appearances</li>
                <hr />
                <li>Users</li>
                <hr />
                <li>Updates</li>
            </ul>
        </motion.div>
    </>
  )
}

export default SettingsC