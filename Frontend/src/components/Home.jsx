import React from 'react'
const Home = ({clickaction}) => {
  return (
    <>
    <div className='flex '>
    <div className='p-8 max-w-1/2'>
        <h1 className='text-7xl  font-bold leading-20'>Real Stories, Real Voices – Share, Inspire, and Connect with the World</h1>
        <button onClick={clickaction} className='border-2 rounded-full px-8 py-2 mt-5'>Create Blog</button>
    </div>
    <div className='w-1/2'>
        <img src="https://tse2.mm.bing.net/th?id=OIF.JeUbXBca8d59Ezcd5Rwe%2bQ&pid=Api&P=0&h=180" className='h-screen'/>
    </div>
    </div>
    </>
  )
}

export default Home