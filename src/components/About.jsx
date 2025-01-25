import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-screen h-fit bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className="max-w-screen-lg l-4 mx-auto flex flex-col justify-center w-full h-full p-4">
            <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>    
            </div>
            <p className="text-xl mt-20">Hi, I'm Vidhan Jain, a final-year Computer Science student at Dayananda Sagar College of Engineering with a passion for crafting intuitive and immersive web experiences. My expertise lies in frontend development, leveraging technologies like React, JavaScript, HTML, and Tailwind CSS to design responsive and user-friendly interfaces.</p>
            <br/>
            <p className="text-xl">I have professional experience at <span className='font-semibold'>Hashedin by Deloitte</span>, where I contributed to the development of scalable and user-centric platforms. My work involved building and optimizing frontend architectures using Angular and React, ensuring seamless performance, and delivering features that enhanced application efficiency by up to 20%. I also collaborated across teams to deploy client-ready solutions, resolved critical bugs, and improved user experience through meticulous attention to detail and innovation.</p>
            <br/>
            <p className="text-xl">Beyond professional contributions, I've brought creative ideas to life through projects like <span className='font-semibold'>Codewars</span> —a dynamic online coding competition platform—and CodeHub, an advanced coding environment with real-time compilers and performance-focused design.</p>
            <br/>
            <p className="text-xl">Recognized with a <span className='font-semibold'>Special Mention</span> at a Hackathon by the <bold>Election Commission of India</bold>, I take pride in my problem-solving skills and innovative mindset. With a keen eye for detail and a deep passion for frontend development, I strive to create seamless, visually appealing designs that enhance user experiences.</p>
          </div>
    </div>
  )
}

export default About