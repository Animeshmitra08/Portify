import React from 'react'
import { motion } from 'framer-motion';

import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
  return (
    <>
        <motion.div 
        transition={{ease:"easeIn"}}
        className="container mx-auto flex flex-col justify-center items-center h-screen">

            <div className="rounded-xl border-2 border-cyan-700 shadow-2xl md:w-[30rem] sm:w-[25rem] w-[20rem] h-[30rem] 
            bg-white flex flex-col p-5">
                <h1 className="text-center text-4xl font-bold mb-2">Register</h1>
                <div className="flex justify-evenly h-[5rem] text-center gap-2 items-center">
                  <button className="border-2 p-2 w-full rounded-xl flex items-center justify-evenly">
                  <FcGoogle className="w-6 h-6"/>
                    Login with Google
                  </button>
                  <button className="border-2 p-2 w-full rounded-xl flex items-center justify-evenly">
                  <BsGithub className="w-6 h-6"/>
                    Login with Github
                  </button>
                </div>
                <form method='POST'>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mt-2">
                      <label htmlFor="createpassword" className="block text-sm font-medium leading-6 text-gray-900">
                        Create Password
                      </label>                      
                    </div>
                    <div className="mt-2">
                      <input
                        id="createpassword"
                        name="createpassword"
                        type="password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mt-2">
                      <label htmlFor="confirmpassword" className="block text-sm font-medium leading-6 text-gray-900">
                        Confirm Password
                      </label>                      
                    </div>
                    <div className="mt-2">
                      <input
                        id="confirmpassword"
                        name="confirmpassword"
                        type="password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full mt-4 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>


                </form>
            </div>
        </motion.div>
    </>
  )
}

export default Register