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










module.exports = {
    getAllPosts,
    getPostById,
}