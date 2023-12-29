import React, { useEffect, useRef, useState } from 'react';
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { MdSettings } from "react-icons/md";
import SettingsC from '../Components/SettingsC';

const Dashboard = () => {

  const [avatarDropdown, setAvatarDropdown] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  
  //for avatar----------
  const handleclick = () =>{
    setAvatarDropdown((prev)=> !prev);
  }
  //for settings-----------------
  const settingsClick =()=>{
    setSettingsOpen(!settingsOpen);
  }
  
  let divref = useRef();                                //to refer the elements of profile avatar                    
  let settingsref = useRef();                           //to refer the elements of settings

  useEffect(() => {
    const mouseHandler =(e)=>{
      if(!divref.current.contains(e.target)){
        setAvatarDropdown(false);
      }      
    }

    const mouseHandler2 = (e)=>{
      if (!settingsref.current.contains(e.target)) {
        setSettingsOpen(false)
      }
    }

    document.addEventListener('mousedown', mouseHandler);
    document.addEventListener('mousedown', mouseHandler2);

    return () => {
      document.removeEventListener('mousedown', mouseHandler);
      document.removeEventListener('mousedown', mouseHandler2);
    }
  },[])
  
  


  return (
    <>
      <div className="bg-slate-800 w-100 h-screen overflow-hidden">
        <h1 className="absolute text-gray-50 left-12 top-1 text-lg">Dashboard</h1>

        <button className="absolute left-1 top-1" >
          <HiMiniBars3BottomLeft className="w-8 h-8 fill-slate-400"/>
        </button>

        {/* settings------------------- */}
        <div ref={settingsref}>
          <button className="absolute bottom-2 left-1" onClick={settingsClick}>
            <MdSettings className="w-8 h-8 fill-slate-400" />
          </button>
          {settingsOpen && <SettingsC/>}
        </div>
        

        {/* profile avatar-------------------------- */}
        <div ref={divref}>
          <button className="bg-slate-50 cursor-pointer absolute right-2 top-1 flex items-center px-2 gap-1 rounded-full" onClick={handleclick}>
            <span>Animesh</span>
            <img className="w-8 h-8 rounded-full " src="/assets/avatar1.jpg" alt="Medium avatar"/>
          </button>
        
          {avatarDropdown && 
          <div className="bg-slate-50 w-[150px] rounded-md p-2 absolute shadow-lg right-2 top-[50px] drpdwn border-gray-500 border-[1px]">
            <ul className="flex flex-col gap-1">
              <li>Profile</li>
              <hr/>
              <li>Settings</li>
              <hr/>
              <li>Logout</li>
            </ul>
          </div>}
        </div>
       
        




        <div className="bg-slate-50 ml-10 mt-10 w-screen h-screen rounded-tl-md flex pr-2">
          <div className="w-[300px] h-[100%] bg-slate-300 rounded-l p-1">
            siidebar
          </div>
          <hr/>
          <div className="w-[100%] h-[100%] bg-slate-500 p-1">
            content section
          </div>

        </div>

      </div>        
    </>
  )
}

export default Dashboard