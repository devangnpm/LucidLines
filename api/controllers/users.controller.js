const prisma = require("../db/prismaclient");



async function getAllUsers() {
    const allUsers = await prisma.user.findMany({
        select: {
            id: true,
            username: true,
            email: true,
            admin: true,
        }
    })
    return allUsers
}

// update user details 
async function updateUserDetails(userId) {
   const user =  await prisma.user.update({
        where: {
            id: userId
        },

        data: {
            username: username,
            email: email,
            password: passport
        }
   })
}

// delete user account
async function deleteUser(userId) {
    return prisma.user.delete({
        where: {
            id: userId
        }
    })
}

module.exports = {
    getAllUsers,
    updateUserDetails,
    deleteUser,
}

