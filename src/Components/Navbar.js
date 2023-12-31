import { useState } from 'react';
import { Dialog, Popover } from '@headlessui/react';
import { Link } from 'react-router-dom';

import { FaBars } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import LandingAvatar from './LandingAvatar';


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [avatarDropdown, setAvatarDropdown] = useState(false);

  //for avatar----------
  const handleclick = () =>{
    setAvatarDropdown(!avatarDropdown);
  }

  return (
    <header className="relative z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Portify</span>
            <img className="h-14 w-auto" src="./assets/logo.png" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex z-0 items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <FaBars className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
        
          <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </Link>
          <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">
            Features
          </Link>
          <Link to="/templates" className="text-sm font-semibold leading-6 text-gray-900">
            Templates
          </Link>
          <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900">
            Company
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-1">
          <Link to="/register" className="text-sm font-semibold leading-6 text-gray-900">
            Register
          </Link>
          <span>/</span>
          <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <div className="lg:block hidden">
          <button className="bg-slate-50 cursor-pointer flex items-center px-2 gap-1 rounded-full shadow-lg" onClick={handleclick}>
            <span>Animesh</span>
            <img className="w-8 h-8 rounded-full " src="/assets/avatar1.jpg" alt="Medium avatar"/>
          </button>
          {avatarDropdown && <LandingAvatar/>}
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Portify</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <RxCross2 className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">                
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </Link>
                <Link
                  to="/templates"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Templates
                </Link>
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </Link>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Register
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
              
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
