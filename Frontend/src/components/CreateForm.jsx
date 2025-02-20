import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const CreateForm = ({addblog}) => {
  
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [img, setImg] = useState(null);
 
  const handleAuthorChange = (e) => setAuthor(e.target.value);
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleImgChange = (e) => setImg(e.target.value);
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

  
    const blogData = {
      author,
      title,
      content,
      img,
      likecount:0,
      viewcount:0
    };
    addblog(blogData);
    setAuthor('');
    setTitle('');
    setContent('');
    setImg('');
    navigate('/blogs');
}

  return (
    <div className='flex justify-center my-8'>
        <form className='border-3 rounded-xl w-180 bg-white' onSubmit={handleSubmit}>
            <div className='h-12 bg-yellow-500 border-b-2 rounded-t-lg'></div>

            <div className='flex flex-col p-8'>
                <h1 className='font-bold text-2xl mb-8'>Your blog here!</h1>
                <label className='text-xl mb-3'>Author Name</label>
                <input type='text' className='border-2 rounded-md mb-3 h-10 pl-2' placeholder='Your name' value={author} onChange={handleAuthorChange}/>
                <label className='text-xl mb-3'>Title</label>
                <input type='text' className='border-2 rounded-md mb-3 h-10 pl-2' placeholder='Title here' value={title}  onChange={handleTitleChange} />
                <label className='text-xl mb-3'>Your Blog</label>
                <textarea className='border-2 rounded-md mb-3 h-40 pl-2' placeholder='Your content' value={content}  onChange={handleContentChange} />
                <label className='text-xl mb-3'>Image</label>
                <input type='text' className='border-2 rounded-md mb-3 h-10 pl-2' placeholder='Image URL here' value={img}  onChange={handleImgChange} />
            </div>
            <div className='flex justify-center'>
            <button className='border-2 h-12 w-32 bg-cyan-700 rounded-lg text-3xl mb-5'>Post</button></div>
        </form>
    </div>
  )
}

export default CreateForm