import React from 'react'
import HeroImage from '../assets/heroImage.jpg'
import {HiArrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'
const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 ">
        <div className="max-w-screen-lg mx-auto flex flex-col text-white justify-center items-center md:flex-row h-full px-4">
            <div className="flex flex-col justify-center h-full">
                <h2 className='text-4xl sm:text-7xl font-bold'>I am a Full Stack Developer</h2>
                <p className='text-gray-400 py-4 max-w-md'>I have experience building web applications and designing with techologies as HTML, CSS, Javascript, ReactJS, Tailwind CSS, NextJS</p>
                <div className="">
                    <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer '>
                        Portfolio 
                        <span className='group-hover:rotate-90 duration-300 ml-1'><HiArrowRight size={25}/></span>
                    </Link>
                </div>
            </div>
            <div><img src={HeroImage} alt="profile" className='rounded-2xl mx-auto w-2/3 md:w-full'/></div>
        </div>
    </div>
  )
}

export default Home