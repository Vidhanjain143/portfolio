import React from "react";
import contact from "../assets/contact.jpg"
const Contact = () => {
  return (
    <div name="contact" className="w-screen h-screen bg-gradient-to-b from-gray-800 to-black p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6">I am excited to talk to you !</p>
        </div>
        <div className="flex justify-between items-center">
          <form action="https://getform.io/f/f46dd886-fc40-4c47-b666-a88ef9d4bbc0" method="POST" className="flex flex-col w-full md:w-1/2">
            <input type="text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
            <input type="text" name="email" placeholder="Enter your email" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
            <textarea name="message" placeholder="Enter your message" rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
          <div className="hidden md:block flex-1 ml-10 h-full mt-10"><img src={contact} alt=""/></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;