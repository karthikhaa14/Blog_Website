import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditBlog = ({ addblog }) => {
  const { id } = useParams();

 
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [img, setImg] = useState('');
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/blogs/${id}`)
      .then((response) => {
        const fetchedBlog = response.data;
        setBlog(fetchedBlog);
        setAuthor(fetchedBlog.author);
        setTitle(fetchedBlog.title);
        setContent(fetchedBlog.content);
        setImg(fetchedBlog.img);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const blogData = {
      author,
      title,
      content,
      img,
    };

    axios.put(`http://localhost:5000/api/blogs/${id}`, blogData)
      .then((response) => {
        addblog(response.data);
      })
      .catch((error) => console.log(error));
      setAuthor('');
        setTitle('');
        setContent('');
        setImg('');
        alert("Blog Updated");
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex justify-center my-8'>
      <form className='border-3 rounded-xl w-180 bg-white' onSubmit={handleSubmit}>
        <div className='h-12 bg-yellow-500 border-b-2 rounded-t-lg'></div>

        <div className='flex flex-col p-8'>
          <h1 className='font-bold text-2xl mb-8'>Update your blog!</h1>
          <label className='text-xl mb-3'>Author Name</label>
          <input
            type='text'
            className='border-2 rounded-md mb-3 h-10 pl-2'
            placeholder='Your name'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <label className='text-xl mb-3'>Title</label>
          <input
            type='text'
            className='border-2 rounded-md mb-3 h-10 pl-2'
            placeholder='Title here'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className='text-xl mb-3'>Your Blog</label>
          <textarea
            className='border-2 rounded-md mb-3 h-40 pl-2'
            placeholder='Your content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <label className='text-xl mb-3'>Image</label>
          <input
            type='text'
            className='border-2 rounded-md mb-3 h-10 pl-2'
            placeholder='Image URL here'
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <div className='flex justify-center'>
          <button className='border-2 px-3 py-2 bg-cyan-700 rounded-lg text-3xl mb-5'>
            Post Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBlog;
