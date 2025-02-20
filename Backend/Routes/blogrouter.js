const express=require("express")
const router=express.Router()

const Blog = require("../models/blogSchema");

router.post("/", async (req,res)=>{
    const {author,title,content,img,likecount,viewcount}=req.body
    try{
        const newBlog= new Blog({author,title,content,img,likecount,viewcount});
        await newBlog.save();
        res.status(201).json({message:"Your blog added",blog:newBlog});
    }
    catch(err){
        res.status(400).json({message:"Error creating blog",error:err.message});
    }
});

router.get("/",async(req,res)=>{
    try{
        const blog=await Blog.find();
        if(!blog){
            res.status(400).json({message:"Blog not found"});
        }
        res.status(200).json(blog);
    }
    catch(err){
        res.status(500).json({message:"Error fetching blog",error:err.message});
    }
})

router.get("/:id", async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id);
      res.json(blog);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

router.delete("/:id",async(req,res)=>{
    const id=req.params.id;
    try{
        const deletedblog= await Blog.findByIdAndDelete(id);
        if(!deletedblog){
            res.status(400).json({message:"Blog not found"});
        }
        res.status(200).json({message:"blog deleted"});
    }
    catch(err){
        res.status(500).json({message:"Error deleting Blog",error:err.message});
    }
})

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const { author, title, content, img, likecount, viewcount } = req.body;

    try {
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        blog.author = author || blog.author;
        blog.title = title || blog.title;
        blog.content = content || blog.content;
        blog.img = img || blog.img;
        blog.likecount = likecount || blog.likecount;
        blog.viewcount = viewcount || blog.viewcount;
        await blog.save(); 

        res.status(200).json({ message: "Blog Updated", blog: blog });
    } catch (err) {
        res.status(500).json({ message: "Error Occurred", error: err.message });
    }
});




module.exports=router;