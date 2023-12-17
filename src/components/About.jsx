import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-screen h-fit bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className="max-w-screen-lg l-4 mx-auto flex flex-col justify-center w-full h-full p-4">
            <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>    
            </div>
            <p className="text-xl mt-20">Hi, I'm Vidhan Jain, a final year student at Dayananda Sagar College of Engineering. I'm passionate about building immersive web experiences using technologies like React, HTML, Tailwind CSS, and JavaScript. My journey into the world of technology has led me to explore the realms of Full Stack Development, where I've delved into databases like MongoDB and Firebase for real-time applications. I take pride in my projects, where I've applied these technologies to bring creative ideas to life.</p>
            <br/>
            <p className="text-xl">I've been recognized with a <span className='font-bold italic'>Special Mention</span> at a Hackathon conducted by Election Commission of India, a testament to my problem-solving skills and innovative thinking. I thrive on challenges and am always eager to take on new problems. From building interactive frontends to ensuring seamless backend functionality, I enjoy the entire spectrum of development. Frontend development holds a special place in my heart, and I'm enthusiastic about refining user interfaces to create intuitive and visually appealing designs.</p>
          </div>
    </div>
  )
}

export default About