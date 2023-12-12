import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa'
import {FaSquareXTwitter} from 'react-icons/fa6'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
    const socialLinks=[
        {name:"LinkedIn",icon:<FaLinkedin size={30}/>,href:"https://www.linkedin.com/in/vidhan-jain-3574471a8/",style:'rounded-tr-md'},
        {name:"Github",icon:<FaGithub size={30}/>,href:"https://github.com/Vidhanjain143",style:''},
        {name:"X",icon:<FaSquareXTwitter size={30}/>,href:"https://twitter.com/VidhanJain18",style:''},
        {name:"Mail",icon:<HiOutlineMail size={30}/>,href:"https://mail.google.com/mail/?view=cm&fs=1&to=vidhanjain143@gmail.com&su=Subject%20of%20the%20email&body=Body%20of%20the%20email",style:''},
        {name:"Resume",icon:<BsFillPersonLinesFill size={30}/>,href:"/resume.pdf",style:'rounded-br-md',download:true},
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
       <ul>
        {socialLinks.map(({name,icon,href,style,download})=>(
            <li key={name} className={'flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-0 hover:rounded-tr-md hover:rounded-br-md '+style}>
            <a href={href} target="_blank" rel="noreferrer" className='flex justify-between items-center w-full text-white font-semibold' download={download}><>{name}{icon}</></a>
        </li>
        ))}
       </ul>
    </div>
  )
}

export default SocialLinks