import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks1 = () => {
    const socialLinks=[
        {name:"LinkedIn",icon:<FaLinkedin size={20}/>,href:"https://www.linkedin.com/in/vidhan-jain-3574471a8/"},
        {name:"Github",icon:<FaGithub size={20}/>,href:"https://github.com/Vidhanjain143"},
        {name:"Mail",icon:<HiOutlineMail size={20}/>,href:"https://mail.google.com/mail/?view=cm&fs=1&to=vidhanjain143@gmail.com&su=Subject%20of%20the%20email&body=Body%20of%20the%20email"},
        {name:"Resume",icon:<BsFillPersonLinesFill size={20}/>,href:"/resume.pdf",download:true},
    ]
  return (
    <div className='flex justify-center items-center px-2  bg-gray-800 gap-1 w-screen lg:hidden pb-4'>
        {socialLinks.map(({name,icon,href,download})=>(
            <div key={name} className={'flex justify-between items-center w-20 mt-4 mb-4 h-20 px-2 bg-gray-500 hover:ml-0 rounded-lg ml-1 mr-1 hover:rounded-xl'}>
            <a href={href} target="_blank" rel="noreferrer" className='flex flex-col justify-between items-center w-full text-white font-semibold' download={download}><>{icon}</>{name}</a>
        </div>
        ))}
    </div>
  )
}

export default SocialLinks1