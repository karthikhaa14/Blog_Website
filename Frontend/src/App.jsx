
  import Header from './components/Header'
  import './App.css'
  import Home from './components/Home'
  import Footer from './components/Footer'
  import Blogs from './components/Blogs'
  import About from './components/About'
  import CreateForm from './components/CreateForm'
  import BlogView from './components/BlogView'
  import EditBlog from './components/EditBlog'
  import { useNavigate } from 'react-router-dom'
  import { BrowserRouter,Routes,Route } from 'react-router-dom'
  import {useState,useEffect} from 'react'
  import axios from "axios"

  function App() {

    return (
      <>
      <BrowserRouter>
      <AppContent />
        </BrowserRouter>
      </>
    )
  }

  const AppContent=()=>{
    const [blogs,setBlog]=useState([]);
    const navigate=useNavigate();

    useEffect(() => {
      axios.get("http://localhost:5000/api/blogs").then((response)=>{setBlog(response.data)})
      .catch((err)=>{console.log(err)})
    }, []);
    

    function handleclick(){
      navigate("/create_blog");
    }

    function updatecounts(id, type) {
      setBlog((prevBlogs) => {
          return prevBlogs.map((blog) => {
              if (blog._id === id) {
                  const updatedBlog = {
                      ...blog,
                      likecount: type === 'like' ? blog.likecount + 1 : blog.likecount,
                      viewcount: type === 'view' ? blog.viewcount + 1 : blog.viewcount,
                  }
                  axios.put(`http://localhost:5000/api/blogs/${id}`, {
                      author: updatedBlog.author, 
                      title: updatedBlog.title,
                      content: updatedBlog.content,
                      likecount: updatedBlog.likecount,
                      viewcount: updatedBlog.viewcount,
                  }).then(() => {
                      console.log("Successfully updated counts on backend");
                  }).catch((err) => {
                      console.error("Error updating count:", err);
                  });
  
                  return updatedBlog; 
              }
              return blog; 
          });
      });
  }
  
  
  
    function addblog(blog){
      axios.post("http://localhost:5000/api/blogs",blog)
      .then((response)=>{setBlog((prevblogs)=>{[...prevblogs],response.data});})
      .catch((err)=>{console.log(err)});
      
    }
    
    function viewClick(id){
      navigate(`/blogs/view_blog/${id}`);
    }
    function editClick(id){
      navigate(`/blogs/edit_blog/${id}`)
    }
    const blog_delete = (id) => {
     axios.delete(`http://localhost:5000/api/blogs/${id}`).then(()=>{setBlog((prevBlogs)=>prevBlogs.filter(blog=>blog._id!==id))})
     .catch(err=>console.log(err));
    };
    return <>
    <div className='bg-orange-100'>
        <Header clickaction={handleclick} />
        <Routes>
        <Route path='/' element={<Home clickaction={handleclick} />}></Route>
        <Route path='/blogs' element={<Blogs blogs={blogs} updatecounts={updatecounts} viewclick={viewClick} blog_delete={blog_delete}  editClick={editClick} />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/create_blog' element={<CreateForm addblog={addblog}/>}></Route>
        <Route path='/blogs/view_blog/:id' element={<BlogView updatecounts={updatecounts}/>}></Route>
        <Route path='/blogs/edit_blog/:id' element={<EditBlog addblog={addblog}/>}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  }

  export default App
