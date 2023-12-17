import React from 'react'
import leetcode from '../assets/leetcode.png'
import codechef from '../assets/codechef.png'
import gfg from '../assets/gfg.png'

const CodingProfiles = () => {
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-screen text-white md:h-screen pt-10'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className="pb-8">
        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Coding profiles</p>
        <div className="flex w-full justify-around items-center mt-10 shadow-md shadow-gray-500 p-4">
            <a href='https://leetcode.com/Vidhan_Jain/' target='_blank' rel="noreferrer"><div className='text-white font-bold text-xl inline border-b-2 border-gray-500 md:text-4xl'>Leetcode</div></a>
            <img src={leetcode} alt="leetcode"className='w-[200px] ml-1 md:w-fit' />
        </div>
        <div className="flex w-full justify-around items-center mt-10 shadow-md shadow-gray-500 p-4">
            <a href='https://auth.geeksforgeeks.org/user/jainv9638' target='_blank' rel="noreferrer"><div className='text-white font-bold text-xl inline border-b-2 border-gray-500 md:text-4xl'>Geeks For Geeks</div></a>
            <img src={gfg} alt="gfg" className='w-[200px] h-[100px] ml-1 md:w-2/3 md:h-[200px]'/>
        </div>
        <div className="hidden w-full justify-around items-center mt-10 shadow-md shadow-gray-500 p-4">
            <div className='text-white font-bold text-xl inline border-b-2 border-gray-500 md:text-4xl'>Codechef</div>
            <img src={codechef} alt="leetcode" className='w-[500px] h-[150px]'/>
        </div>
        </div>
      </div>
    </div>  
  )
}

export default CodingProfiles