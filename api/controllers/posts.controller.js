const prisma = require("../db/prismaclient");


async function getAllPosts(params) {
    const allPosts = prisma.post.findMany();
    return allPosts;
}


async function getPostById(params) {
    return prisma.post.findUnique({
        where: {
            id: postId,
        }
    })
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


async function createNewBlogPost(blogData,userId) {
    const newPost = await prisma.post.create({
        data: {
            title: blogData.title,
            content: blogData.editorContent,
            image_url: blogData.image_url,
            user: {
                connect: {id: userId},
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