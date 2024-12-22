import React from 'react'
import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import logo from '../assets/images/logo.jpeg'
import grid from '../assets/icons/justify.svg'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)
 

  return (
    
    <div>
      <nav className='d-flex justify-content-between align-items-center py-3 bg-secondary bg-opacity-10'>
        <div className='ps-5'>
          <img src={logo} alt="logo" width={90} height={90}/>
        </div>
        
        <div className="d-lg-none">
          <button onClick={() => setMenuOpen(!menuOpen)} className="me-5">
            <img src={grid} alt="" width={40} />
            
          </button>
          
        </div>

        <div className='d-none d-lg-flex'>
          <ul className='d-flex list-group list-group-horizontal list-group-flush'>
            <li className='me-5 list'>
              <Link to='/' 
                className='text-decoration-none text-[#597e2e] fs-5 cursor-pointer 
                  hover:bg-[#597e2e] hover:rounded-sm hover:text-[#faf8f5] px-3 py-2'>
                HOME
              </Link>
            </li>
            <li className='me-5 list'>
              <Link to='/about' 
                className='text-decoration-none text-[#597e2e] fs-5 cursor-pointer
                  hover:bg-[#597e2e] hover:rounded-sm hover:text-[#faf8f5] px-3 py-2'>
                ABOUT
              </Link>
            </li>
            <li className='me-5 list'>
              <Link to='/more' 
                className='text-decoration-none text-[#597e2e] fs-5 cursor-pointer
                  hover:bg-[#597e2e] hover:rounded-sm hover:text-[#faf8f5] px-3 py-2'>
                MORE
              </Link>
            </li>
          </ul>
        </div>

        <div className='d-none d-lg-flex'>
          <ul className='d-flex list-group list-group-horizontal'>
            <li className='me-5 list-group-item list-group-item-info px-5'>
              <Link to='/contact'  
                className='text-decoration-none text-[#597e2e] fs-5 cursor-pointer'>
                  CONTACT US
                </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className='float-end w-full'>

        {menuOpen && <ShowNav menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>}
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

const ShowNav = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`d-lg-none bg-[#a0c52a] bg-opacity-40 md:w-3/5 lg:w-4/5 text-end mobile_animate
                    rounded right-5 absolute ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <ul className=''>
        <li className='me-5 my-3 list'>
          <Link to='/' 
            className='text-decoration-none text-[#597e2e] text-lg hover:text-2xl hover:font-extrabold cursor-pointer ' 
            onClick={() => setMenuOpen(!menuOpen)}>
              HOME
          </Link>
        </li>
        <li className='me-5 mb-3 list'>
          <Link to='/about' 
            className='text-decoration-none text-[#597e2e] text-lg hover:text-2xl hover:font-extrabold cursor-pointer'
            onClick={() => setMenuOpen(!menuOpen)}>
              ABOUT
          </Link>
        </li>
        <li className='me-5 mb-3 list'>
          <Link to='/more' 
            className='text-decoration-none text-[#597e2e] text-lg hover:text-2xl hover:font-extrabold cursor-pointer'
            onClick={() => setMenuOpen(!menuOpen)}>
              MORE
          </Link>
        </li>
        <li className='me-5 list'>
          <Link to='/contact'  
            className='text-decoration-none text-[#597e2e] text-lg hover:text-2xl hover:font-extrabold cursor-pointer'
            onClick={() => setMenuOpen(!menuOpen)}>
              CONTACT US
          </Link>
        </li>
      </ul>

    </div>
  );
}
export default Header
