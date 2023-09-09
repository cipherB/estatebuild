import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaBars, FaArrowLeft } from 'react-icons/fa';
import Logo from '../assets/acrux-logo.png';

const Navbar = () => {
  const current_path = useLocation().pathname;
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);
  return (
    <nav 
      className='fixed top-0 z-10 w-screen bg-white border-b border-gray-300 shadow' 
    >
      <div className=' navbar' >
        <div>
          <img 
            src={Logo} 
            alt='company logo'
            className='cursor-pointer'
            onClick={()=>navigate('/')}
          />
        </div>
        <ul className='items-center hidden list-none md:flex gap-x-8' >
          <li
            className={`${current_path==="/"&&"text-palette-one"} hover:border-b
            pb-2 hover:border-b-palette-two hover:text-palette-four cursor-pointer`}
          >
            <Link to='/' className=' text-inherit' >
              Home
            </Link>
          </li>
          <li
            className={`${current_path==="/about"&&"text-palette-one"} hover:border-b
            pb-2 hover:border-b-palette-two hover:text-palette-four cursor-pointer`}
          >
            <Link to='/about' className=' text-inherit' >
              About Us
            </Link>
          </li>
          <li
            className={`${current_path==="/faq"&&"text-palette-one"} hover:border-b
            pb-2 hover:border-b-palette-two hover:text-palette-four cursor-pointer`}
          >
            <Link to='/faq' className=' text-inherit' >
              FAQs
            </Link>
          </li>
          <li
            className={`${current_path==="/contact"&&"text-palette-one"} hover:border-b
            pb-2 hover:border-b-palette-two hover:text-palette-four cursor-pointer`}
          >
            <Link to='/contact' className=' text-inherit' >
              Contact Us
            </Link>
          </li>
          <li
            // className={`${current_path==="/about"&&"text-palette-one"} hover:border-b
            // pb-2 hover:border-b-palette-two hover:text-palette-four cursor-pointer`}
          >
            <Link to='/invest-application' className=' text-inherit' >
              <button className='h-full px-6 text-white rounded bg-palette-four hover:border-0' >
                Invest
              </button>
            </Link>
          </li>
        </ul>
        <FaBars 
          className='text-2xl font-bold md:hidden' 
          onClick={()=>setShowNav(true)}
        />
        {
          showNav && (
            <div 
              className={`bg-black bg-opacity-20 fixed md:hidden top-0 z-20 left-0
              h-screen duration-300 ${!showNav?'w-0':'w-screen'}`}
              onClick={()=>setShowNav(false)} 
            ></div>
          )
        }
        <ul  
          className={`h-screen list-none bg-white z-30 ${showNav?"w-[70vw]":
        "w-0 invisible"} left-0 top-0 fixed duration-300 transition-[width] py-6 md:hidden`}
        >
          <li className='mb-7' >
            <FaArrowLeft 
              className='ml-6 text-xl font-bold'
              onClick={()=>setShowNav(false)}
            />
          </li>
          <li
            className={`px-6 bg-opacity-20 border-b py-2 mb-3 ${current_path==="/"&&"bg-palette-one"} text-inherit`}
          >
            <Link to='/' onClick={()=>setShowNav(false)} >
              Home
            </Link>
          </li>
          <li
            className={`px-6 mb-3 border-b py-2 bg-opacity-20 ${current_path==="/about"&&"bg-palette-one"} text-inherit`}
          >
            <Link to='/about' onClick={()=>setShowNav(false)} className={` py-2`} >
              About Us
            </Link>
          </li>
          <li
            className={`px-6 mb-3 border-b py-2 bg-opacity-20 ${current_path==="/faq"&&"bg-palette-one"} text-inherit py-2`}
          >
            <Link to='/faq' onClick={()=>setShowNav(false)} className={`py-2`} >
              FAQs
            </Link>
          </li>
          <li
            className={`px-6 mb-3 border-b py-2 bg-opacity-20 ${current_path==="/about"&&"bg-palette-one"} text-inherit`}
          >
            <Link to='/invest-application' onClick={()=>setShowNav(false)} className={` py-2`} >
              Invest
            </Link>
          </li>
          <li
            className={`px-6 border-b py-2 bg-opacity-20 ${current_path==="/contact"&&"bg-palette-one"} text-inherit`}
          >
            <Link to='/contact' onClick={()=>setShowNav(false)} className={` py-2`} >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar