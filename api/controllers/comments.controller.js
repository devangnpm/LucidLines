const prisma = require("../db/prismaclient");

async function getComments(params) {
  const allComments = await prisma.comment.findMany();
  return allComments;
}

async function createComment(postId, userId, content) {
  const newComment = await prisma.comment.create({
    data: {
      content,
      post: {
        connect: { id: postId },
      },
      user: {
        connect: { id: userId },
      },
    },
  });
}


async function deleteComment(commentId) {
    return await prisma.comment.delete({
        where : {
            id: commentId,
        }
    })
}

module.exports = {
    getComments,
    createComment,
    deleteComment,
    
};
