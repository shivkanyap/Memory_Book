const express=require('express')
const router=express.Router();
const {getPosts} =require('../../controllers/posts')


router.use('/posts',getPosts)
// export default router
module.exports={
    routes:router
}