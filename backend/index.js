require('dotenv').config();
const express = require('express');
const authRouter = require("./routes/auth.route");
const postsRouter = require("./routes/posts.route");




const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.use("/auth", authRouter);
app.use("/posts", postsRouter);





//error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
})


app.listen(process.env.PORT|| 3000, console.log("server listening on port 3000"));

