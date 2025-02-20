import React from 'react'

const About = () => {
  return (
    <div className='flex'>
        <div className='p-10 w-3/4 '>
            <h1 className='font-extrabold text-2xl mb-6 text-blue-900'>About Us</h1>
            <p className='font-bold text-lg mb-3'>Welcome to OpenInk – a space where ideas, experiences, and stories come to life!

        At OpenInk, we believe in the power of words to inspire, educate, and entertain. 
        Whether you're here for insightful articles, personal experiences, 
        or expert advice, our goal is to provide valuable content that resonates with you.</p>
        <h1 className='font-extrabold text-2xl mb-6 text-blue-900'>Who are we</h1>
        <p className='font-bold text-lg mb-3'>We are a passionate team of writers, creators, and thinkers 
            dedicated to bringing you well-researched and engaging content across various topics. From technology 
            and lifestyle to health, travel, and beyond, we strive to keep you informed and entertained.</p>
            <h1 className='font-extrabold text-2xl mb-6 text-blue-900'>Our Mission</h1>
            <ul className='font-bold text-lg mb-3'>
                <li>To create a community where ideas flow freely.</li>
                <li>To provide well-researched, high-quality content.</li>
                <li>To inspire and empower our readers through engaging storytelling.</li>
            </ul>
            <h1 className='font-extrabold text-2xl mb-6 text-blue-900'>Join Us</h1>
            <p className='font-bold text-lg mb-3'>Your thoughts and opinions matter! Feel free to engage with us through comments, share your favorite posts, and be a part of our growing community. If you have an idea or a story to share, we'd love to hear from you.

Thank you for being a part of OpenInk. Happy reading! 

Would you like me to tailor it to a specific niche or style? </p>
        </div>
        <div className='w-1/2 '>
            <img  src='https://tse4.mm.bing.net/th?id=OIP.-8edowsMcK_IWDyrZTMzHgHaDj&pid=Api&P=0' className='w-full h-1/2 '/>
            <img src='https://th.bing.com/th/id/OIP.LgkJGdzEWQvJJ5-WiGZ0QAHaDQ?rs=1&pid=ImgDetMain' className='w-full h-1/2'/> 
        </div>
    </div>
  )
}

export default About