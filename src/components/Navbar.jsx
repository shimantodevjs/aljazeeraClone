// src/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import navLogo from '../assets/navLogo.png'
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlayCircle } from "react-icons/fa";
import { CgProfile } from "react-icons/cg"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const handleMoreBtn = () => {
    setMoreOpen(!moreOpen);
  };

  const handleMenu = () => {
    setIsOpen(false)
    setMoreOpen(false);
  }

  return (
    <nav className="bg-white max-lg:shadow-lg shadow-lg">
      <div className="mx-auto flex justify-between items-center lg:w-[80%]">

        <NavLink to="/" 
                className="text-black text-lg font-bold flex justify-center gap-1 lg:gap-3 items-center px-2"
        >
          <img className='w-[60px] h-[60px]' src={navLogo} alt="" />
          <div className="text-aljazeera font-bold text-lg">ALJAZEERA</div>
        </NavLink>

        <div className={`flex items-start lg:items-center lg:justify-center lg:static max-lg:px-2 max-lg:float-left max-lg:absolute flex-col lg:flex-row max-lg:top-[60px] z-10 bg-white max-lg:w-full max-lg:h-full 
        ${isOpen ? "block" : "hidden lg:flex"}`}>
          <NavLink to="/category/business" onClick={handleMenu}  className="mt-4 text-xl font-bold lg:mt-0 text-black mr-4">
            Business
          </NavLink>
          <NavLink to="/category/entertainment" onClick={handleMenu} className="mt-4 text-xl font-bold lg:mt-0 text-black  mr-4">
            Entertainment
          </NavLink>
          <NavLink to="/category/general"  onClick={handleMenu} className="mt-4 text-xl font-bold  lg:mt-0 text-black mr-4">
            General
          </NavLink>
          <NavLink to="/category/health" onClick={handleMenu} className="mt-4 text-xl font-bold lg:mt-0 text-black mr-4">
            Health
          </NavLink>
          <NavLink to="/category/science" onClick={handleMenu} className="mt-4 text-xl font-bold lg:mt-0 text-black mr-4">
            Science
          </NavLink>
          <div className=" mt-4 text-xl font-bold lg:mt-0 text-black mr-4 ">
            <div>
            <div onClick={handleMoreBtn} className='flex items-center justify-center gap-1 cursor-pointer'>
            More <span className='mt-1'><IoIosArrowDown /></span>
            </div>
            {moreOpen && <div className="mt-4 z-10 lg:absolute lg:bg-white lg:shadow-lg lg:mt-0 lg:w-[200px]">
              <NavLink to="/category/sports" onClick={handleMenu} className="block lg:p-2 ">
                  Sports
              </NavLink>
              <NavLink to="/category/technology" onClick={handleMenu} className="block lg:p-2 mt-2 lg:mt-0">
                  Technology
              </NavLink>
            </div>
            }
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center gap-4'>

          <a href="https://www.youtube.com/watch?v=gCNeDWCI0vo" target='_blank' className="text-xl font-bold lg:mt-0 text-black ">
            <div className='flex items-center justify-center gap-1'>
            <FaPlayCircle size={32} />LIVE
            </div>
          </a>

          <NavLink to="/account" className="text-lg font-bold">
             <span className="block lg:hidden"><CgProfile size={32} /></span>
             <span className="hidden lg:block bg-black text-white py-2 px-4 rounded-full ">Sign up</span>
          </NavLink>

          <div className=" lg:hidden mt-1 px-2">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black">
              {isOpen ? <RxCross2 size={32} /> : <IoMdMenu size={32} />}
          </button>
        </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
