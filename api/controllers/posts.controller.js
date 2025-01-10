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


async function createNewPost(postDetails,userId) {
    const newPost = await prisma.post.create({
        data: {
            title: 'Some random title',
            content: "Some random content",
            user: {
                connect: {id: userId},
            }
        },
        
    })
}


// Upload image to Cloudinary and save the url in database
async function savePostImageURL(req,res) {
    try {

        const fileUrl = req.file.path
        console.log(fileUrl)
        
        res.status(200).json({ fileUrl });
    } catch (error) {
        console.error('error in upload', err);
        res.status(500)
    }
}









module.exports = {
    getAllPosts,
    getPostById,
    updatePostById,
    savePostImageURL,
}