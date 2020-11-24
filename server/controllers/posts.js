
const express=require('express')
const router=express.Router()
const {PostMessage}=require('../models/postMessage')
const mongoose=require('mongoose')



router.get('/',async(req,res)=>{
   try{

    const postMessage=await PostMessage.find();
    res.status(200).send(postMessage)
   }catch(err){
        res.status(404).send({message:err.message})
   }
})
router.post('/',async(req,res)=>{
    const post=req.body
    const newPost=new PostMessage(post)
    try{
        await newPost.save()
    
     res.status(201).json(newPost)
    }catch(err){
         res.status(404).send({message:err.message})
    }
 })

 router.put('/:id',async(req,res)=>{
     const id=req.params.id;
    //  const _id=req.params.id
     console.log(id)
     const { title, message, creator, selectedFile, tags } = req.body;
     if(!mongoose.Types.ObjectId.isValid(id)){
        return res.send(404).send('No post with that id')
     }
     const updatePost= { creator, title, message, tags, selectedFile, _id: id };
     await PostMessage.findByIdAndUpdate(id,updatePost,{new:true})
     res.send(updatePost)
    
 })
 router.delete('/:id',async(req,res)=>{
     const id=req.params.id
     if(!mongoose.Types.ObjectId.isValid(id)){
        return res.send(404).send('No post with that id')
     }
     await PostMessage.findOneAndRemove(id);
     res.json({message:'Post deleted successfully'})
 })
 
 router.put('/:id/likePost',async(req,res)=>{
    const id=req.params.id
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.send(404).send('No post with that id')
    }
    const post=await PostMessage.findById(id);
    const updatedPost=await PostMessage.findByIdAndUpdate(id,{likeCount:post.likeCount+1},{new:true})
    res.json(updatedPost)
 })
module.exports={
    getPosts:router
}