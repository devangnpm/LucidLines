const prisma = require("../db/prismaclient");


async function getAllPosts(params) {
    const allPosts =  await prisma.post.findMany();
    return allPosts;
}


async function getPostById(postId) {
    const post =  prisma.post.findUnique({
        where: {
            id: parseInt(postId),
        }
    })
    return post;
}

async function updatePostById(params) {
    const updatedPost = await prisma.post.update({
        where: {
            id: postId,
        },
        data: {
            title: "updated title",
            content: "updated content"
        }
    })
}

// creating new blog post with public image url
async function createNewBlogPost(title,editor,url,userId) {

    console.log(title)
    console.log(url)

    
    const newPost = await prisma.post.create({
        data: {
            title: title,
            content: editor,
            image_url: url,
            user: {
                connect: {id: parseInt(userId)},
            }
        },
        
    })
}


// returning Cloudinary public image url back to frontend 
async function getPostImageURL(req,res) {
    try {

        const fileUrl = req.file.path
        console.log(fileUrl)
        
        res.status(200).json({ fileUrl });
    } catch (error) {
        console.error('error in upload', error);
        res.status(500)
    }
}


module.exports = {
    getAllPosts,
    getPostById,
    updatePostById,
    getPostImageURL,
    createNewBlogPost,
}