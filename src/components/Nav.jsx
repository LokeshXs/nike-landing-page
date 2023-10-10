import React, { useState } from 'react'
import { headerLogo } from "../assets/images";
import { close, hamburger } from "../assets/icons";
import { navLinks } from '../constants';
import { motion } from 'framer-motion';
import RevealAnimation from './RevealAnimation';


const Nav = () => {

  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  return (
    <motion.header initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 300 }} className={`padding-x py-8 fixed z-20 w-full bg-white ${!isNavBarOpen && 'drop-shadow-md'}  `}>
      <nav className='flex justify-between items-center max-container '>
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {
            navLinks.map(item => (
              <li key={item.label}>
                <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                  {item.label}
                </a>
              </li>
            ))
          }
        </ul>

        <div className='lg:hidden block z-40' onClick={() => {
          setIsNavBarOpen((prev) => !prev)
        }}>
          {isNavBarOpen ? <img src={close} alt="Hamburger" width={30} height={3} /> : <img src={hamburger} alt="Hamburger" width={25} height={25} />}
        </div>

        <div className={`fixed z-30 w-8/12 h-screen top-0 right-0 bg-coral-red transition-all duration-300  ${isNavBarOpen ? 'translate-x-0' : 'translate-x-[100%]'}`}>

        <div className='mt-24 p-8'>
      <motion.ul
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.3, // Delay between each li element
            },
          },
        }}
        initial="hidden"
        animate= {isNavBarOpen?"visible":""}
        exit="hidden"
      >
        {navLinks.map((item) => (
          <motion.li
            key={item.label}
            className='mt-8'
            onClick={() => {
              // Your click handler logic here
            }}
            variants={{
              hidden: { opacity: 0, x: 80 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // Adjust the duration as needed
            }}
          >
            <a href={item.href} className='font-montserrat leading-normal text-3xl text-white font-bold '>
              {item.label}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </div>

        </div>

        <div className={`fixed top-0 left-0 z-20 backdrop-blur-sm h-screen w-screen ${isNavBarOpen ? 'block ' : 'hidden '} `} onClick={() => { setIsNavBarOpen((prev) => !prev) }} />


      </nav>

    </motion.header>
  )
}

export default Nav