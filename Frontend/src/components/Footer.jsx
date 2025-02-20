import React from 'react'
import {Github,Twitter,Linkedin,Codepen,Mail,MessageCircle    } from 'lucide-react'

const Footer = () => {
  return (
    <>
      <div className='flex flex-col border-t-2 p-10 items-center gap-y-5'>
        <h1 className='font-extrabold text-2xl'>CONTACT</h1>
        <hr className='w-40 border-2'/>
        <p className='underline text-lg'>abcd123@gmail.com</p>
        <div>
          <ul className='flex gap-6'>
            <li> <Github /></li>
            <li> <Twitter /></li>
            <li> <MessageCircle /></li>
            <li> <Codepen /></li>
            <li> <Mail /></li>
            <li><Linkedin /></li>
          </ul>
        </div>
        <p>&copy;2024 OpenInk. All Rights Reserved</p>
      </div>
    </>
  )
}

export default Footer