import React from 'react'
import Cards from '../Components/Cards'

const Landing_Page = () => {
  return (
    <>
      <main className="relative mx-auto -mt-[5.75rem] overflow-hidden pb-16 pt-[5.75rem]">
        <img src="./assets/v904-nunny-012.jpg" className="absolute h-screen -top-[1rem] -ml-[120rem] max-w-none w-[166rem] -z-10 sm:-ml-[100.5rem] left-1/2"/>
        <section className="relative w-full max-w-container px-4 sm:px-6 lg:px-8 h-[35rem] sm:h-[28em] mt-[10rem] flex flex-col items-center">
          <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
            Make Yourself More Beautiful
          </h1>
          <h2 className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam deserunt dolorem voluptatem distinctio facilis molestiae, labore eum ipsum iste.
          </h2>
          <br />
          <div>
            <button className="border-2 py-3 bg-black text-slate-50 rounded-xl w-[10rem] shadow-lg shadow-slate-500 border-none mb-2">
              Get Started
            </button>
          </div>
        </section>
        <section className="relative w-full max-w-container bg-[rgb(238,247,248)]">
          <div className="container mx-auto max-h-fit px-4 sm:mt-20 sm:px-6 lg:px-8 xl:mt-32">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, laboriosam reiciendis. A est quas voluptatum, officiis nam commodi ipsa modi voluptate at harum deleniti doloribus aspernatur animi. Deleniti libero voluptatem quos ab tenetur aut optio mollitia facere aliquam sit similique at laboriosam quas excepturi, illum aperiam? Nemo labore modi dicta.
          </div>
          <div className="container mx-auto px-4 sm:mt-20 sm:px-6 lg:px-8 xl:mt-32">
           We have differnt types of Template
          </div>
        </section>
      </main>
      
    </>
  )
}

export default Landing_Page