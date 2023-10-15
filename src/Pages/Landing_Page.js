import React from 'react';
import { motion } from 'framer-motion';
import { scroll } from "framer-motion";
import Cards from '../Components/Cards';



const Landing_Page = () => {
  
  


  return (
    <>
      <motion.main className="relative mx-auto -mt-[5.75rem] overflow-hidden pb-16 pt-[5.75rem]">
        <img src="./assets/v904-nunny-012.jpg" className="absolute h-screen -top-[1rem] -ml-[120rem] max-w-none w-[200rem] -z-10 sm:-ml-[100.5rem] left-1/2"/>
        <section className="relative w-full max-w-container px-4 sm:px-6 lg:px-8 h-[35rem] sm:h-[28em] mt-[10rem] flex flex-col items-center">
          <motion.h1 
          initial = {{y:50, opacity:0, visibility:"hidden"}}
          animate={{y:0, opacity:1, visibility:"visible"}}
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


        <section className="relative w-full max-w-container ">
          <motion.div
          className="container flex flex-col items-center text-center mx-auto max-h-fit px-4 sm:mt-28 sm:px-6 lg:px-8 xl:mt-32">
          <motion.h1 
            variants={{
              offsets:{opacity:0,y:70},
              onsets:{opacity:1,y:0}
            }}
            initial="offsets"
            whileInView="onsets"
            transition={{ease:"easeIn", duration:1}}
            viewport={{once:true}}

            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
           >
            Our Mission
           </motion.h1>
           <p className="mt-6 sm:text-lg">
            Our mission is to empower creatives and professionals by providing them with the perfect platform to display their talents and achievements. We believe that your portfolio should be a work of art in itself, a digital canvas that reflects your passion and personality.
           </p>
          </motion.div>


          <motion.div className="relative container flex flex-col mx-auto px-4 mt-20 sm:mt-20 sm:px-6 lg:px-8 xl:mt-28 py-3">
            {/* <img src="./assets/v904-nunny-012.jpg" className="absolute h-screen -top-[1rem] -ml-[120rem] max-w-none w-[200rem] -z-10 sm:-ml-[100.5rem] left-1/2 mix-blend-multiply"/> */}
            <motion.h1 

            variants={{
              offsets:{opacity:0,y:70},
              onsets:{opacity:1,y:0}
            }}
            initial="offsets"
            whileInView="onsets"
            transition={{ease:"easeIn", duration:1}}
            viewport={{once:true}}

            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-center md:text-left">Our Services</motion.h1>
            <motion.ul className="list-disc px-10 md:px-28 mt-10 sm:text-lg">
              <li>Portfolio Website Design and Development</li>
              <li>Customized Templates</li>
              <li>Graphic Design Services</li>
              <li>SEO Optimization for Enhanced Visibility</li>
              <li>Blog Integration for Showcasing Your Insights</li>
              <li>Ongoing Support and Maintenance</li>
            </motion.ul>
          </motion.div>


          <div className="container mx-auto px-4 sm:mt-20 sm:px-6 lg:px-8">
            <motion.h1 

            variants={{
              offsets:{opacity:0,y:70},
              onsets:{opacity:1,y:0}
            }}
            initial="offsets"
            whileInView="onsets"
            transition={{ease:"easeIn", duration:1}}
            viewport={{once:true}}

            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-center md:text-right">
              What Sets Us Apart
            </motion.h1>
            <div className="mt-6">
              <Cards title="Design Prowess"/>
            </div>
            Design Prowess: We're not just developers; we're designers at heart. Our team of talented designers knows how to create visually captivating websites that will leave a lasting impression on your visitors.

            Tailored Solutions: Your portfolio is as unique as you are. We work closely with you to understand your vision and requirements, ensuring that your website is a true reflection of your brand and style.

            User-Centric Approach: Your audience is at the forefront of our design. We create user-friendly, intuitive websites that engage and inspire, allowing your work to take center stage.

            Cutting-Edge Technology: We stay at the forefront of web development trends and technologies, ensuring that your portfolio is not only beautiful but also fully functional, responsive, and compatible across all devices.
          </div>
        </section>
      </motion.main>
      
    </>
  )
}

export default Landing_Page