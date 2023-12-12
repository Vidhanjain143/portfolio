import React from 'react'
import codehub from "../assets/portfolio/codehub.png"
import studymate from "../assets/portfolio/studymate.png"
import votenation from "../assets/portfolio/votenation.jpeg"
import amazon from "../assets/portfolio/amazon.png"
import analytica from "../assets/portfolio/analytica.jpeg"

const Portfolio1 = () => {
  const projects=[
    { name:"CodeHub",src:codehub,demo:"https://code-hub-opal.vercel.app/",code:"https://github.com/Vidhanjain143/CodeHub"},
    { name:"StudyMate",src:studymate ,demo:"",code:"https://github.com/Vidhanjain143/StudyMate"},
    { name:"VoteNation",src:votenation ,demo:"https://github.com/Vidhanjain143/myapp",code:'https://github.com/Vidhanjain143/myapp'},
    { name:"Analytica",src:analytica ,demo:"https://youtube.com/playlist?list=PLF-alETo8eMVw8sS0hBFn756hYkBVVOcZ&si=vzjgUqvIr6IQhww-",code:"https://github.com/Team-SIH-23/PGRKAM-Web"},
    { name:"Amazon Clone",src:amazon ,demo:"https://amazon-clone-r7kt.vercel.app/",code:"https://github.com/Vidhanjain143/Amazon-clone"},
  ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white pt-10 md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className="pb-8">
           <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
           <p className='py-6 '>Check out some of my work right here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
          {projects.map(({name,src,demo,code})=>(
            <div key={name} className='shadow-md shadow-gray-500 rounded-lg hover:scale-105 duration-200'>
              <p className='font-bold text-3xl flex justify-around items-center p-2 '>{name}</p>
            <img src={src} alt="" className='rounded-md duration-200 group-hover:scale-105 h-[150px] w-full p-2' />
            <div className='flex items-center justify-center'>
            <a href={demo} target="_blank" rel="noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
            <a href={code} target="_blank" rel="noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
          </div>
          </div>
          ))}
        </div>
        </div>
    </div>
  )
}

export default Portfolio1