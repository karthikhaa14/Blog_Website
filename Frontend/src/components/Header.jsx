import React from 'react'
import {Link,useLocation} from 'react-router-dom'

const Header = ({clickaction}) => {
  const location =useLocation();
  return (
    <div className='flex items-center px-5 py-3 justify-between font-extrabold text-xl border-b-2 sticky top-0 bg-orange-100'>
        <img src="https://tse1.mm.bing.net/th?id=OIP.fXktcQxAb0ahw5VZwNk_GgHaHa&pid=Api&P=0&h=80"/>
        <div className='w-1/3'>
            <ul className='flex justify-between w-full'>
                <li className='hover:cursor-pointer hover:underline'><Link to='/'>Home</Link></li>
                <li className='hover:cursor-pointer hover:underline'><Link to='/blogs'>Blogs</Link></li>
                <li className='hover:cursor-pointer hover:underline'><Link to='/about'>About Us</Link></li>
            </ul>
        </div>
        {location.pathname!== '/create_blog' && (
        <button onClick={clickaction} className='border-2 rounded-full px-8 py-2'>Create Blog</button>)}
    </div>
        )
}

export default Header