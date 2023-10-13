import React from 'react';
import { motion } from 'framer-motion';
import { scroll } from "framer-motion";

const Landing_Page = () => {
  return (
    <>
      <motion.main className="relative mx-auto -mt-[5.75rem] overflow-hidden pb-16 pt-[5.75rem]">
        <img src="./assets/v904-nunny-012.jpg" className="absolute h-screen -top-[1rem] -ml-[120rem] max-w-none w-[166rem] -z-10 sm:-ml-[100.5rem] left-1/2"/>
        <section className="relative w-full max-w-container px-4 sm:px-6 lg:px-8 h-[35rem] sm:h-[28em] mt-[10rem] flex flex-col items-center">
          <motion.h1 
          initial = {{y:50, opacity:0}}
          animate={{y:0, opacity:1}}
            transition={{ ease: "easeIn", duration: 2 }}
          className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
            Make Yourself More Beautiful
          </motion.h1>
          <h2 className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam deserunt dolorem voluptatem distinctio facilis molestiae, labore eum ipsum iste.
          </h2>
          <br />
          <div>
            <motion.button 
            whileHover={{scale:1.05}}
            className="border-2 py-3 bg-black text-slate-50 rounded-xl w-[10rem] shadow-lg shadow-slate-500 border-none mb-2">
              Get Started
            </motion.button>
          </div>
        </section>
        <section className="relative w-full max-w-container bg-[rgb(238,247,248)]">
          <div className="container flex flex-col items-center text-center mx-auto max-h-fit px-4 sm:mt-28 sm:px-6 lg:px-8 xl:mt-32">

           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Our Mission
           </h1>
           <p className="mt-6 sm:text-lg">
            Our mission is to empower creatives and professionals by providing them with the perfect platform to display their talents and achievements. We believe that your portfolio should be a work of art in itself, a digital canvas that reflects your passion and personality.
           </p>
          </div>

          <div className="container flex flex-col mx-auto px-4 mt-10 sm:mt-20 sm:px-6 lg:px-8 xl:mt-32">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-center">Our Services</h1>
            <ul className="list-disc px-10 md:px-28 mt-10 sm:text-lg">
              <li>Portfolio Website Design and Development</li>
              <li>Customized Templates</li>
              <li>Graphic Design Services</li>
              <li>SEO Optimization for Enhanced Visibility</li>
              <li>Blog Integration for Showcasing Your Insights</li>
              <li>Ongoing Support and Maintenance</li>
            </ul>
          </div>
          <div className="container mx-auto px-4 sm:mt-20 sm:px-6 lg:px-8 xl:mt-32">
           We have differnt types of Template
          </div>
        </section>
      </motion.main>
      
    </>
  )
}

export default Landing_Page