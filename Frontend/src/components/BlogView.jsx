import React from 'react'
import {useParams} from 'react-router-dom'
import {Heart,Eye} from 'lucide-react'
import {useState,useEffect} from 'react'
import axios from 'axios'


const BlogView = ({updatecounts}) => {
    const { id } = useParams(); 
    const [blog,setBlog]=useState(null);
    useEffect(() => {
      axios.get(`http://localhost:5000/api/blogs/${id}`)  
        .then(response => setBlog(response.data))
        .catch(error => console.log(error));
    }, [id]);

    if(!blog){
      return <p>Loading...</p>
    }
  return (
    <div>   
    <div className="p-8">
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="text-lg mb-6">by {blog.author}</p>
      <p>{blog.content}</p>
      <div className='flex justify-center'>
      <img src={blog.img} className='mt-10 w-150'/></div>
      <div className='flex mt-5 gap-10'>
         <div className='flex'onClick={()=>updatecounts(blog._id,"like")}><Heart /> <p>{blog.likecount}</p></div>
        <div className='flex'><Eye /><p>{blog.viewcount}</p></div>
      </div>
    </div>
    </div>
  )
}

export default BlogView
