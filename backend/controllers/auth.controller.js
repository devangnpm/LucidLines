const bcryptjs = require("bcryptjs");
const prisma = require("../db/prismaclient");
const jwt = require("jsonwebtoken");
require('dotenv').config();

async function handleSignUp(request, res) {
  const { username, password, email } = request.body;

  try {
    const hashedpassword = await bcryptjs.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        username,
        password: hashedpassword,
        email,
      },
    });

    res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    console.error("Error creating user:", error);
    next(error);
  }
}


async function handleSignIn(request, res) {
  const {username,password} = request.body;

  console.dir(username);

  try {
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      }
    })

    if(!user) {return res.status(404).json({message: 'User not found'})};

    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // generating a JWT token and sending it to client
    const token = jwt.sign (
      {userId : user.id, username : user.username}, // Payload data 
      process.env.JWTKEY, // Secret key in env
      {expiresIn: "1h"}  // Expiration time
    )

    res.status(200).json({
      message: "Login Successful!",
      token
    })
    
  } catch (error) {
    console.error('Error while sign-in', error);
    res.status(500).json({ message: 'Something went wrong', error: err.message });
  }
}





module.exports = {
    handleSignUp,
    handleSignIn,
}