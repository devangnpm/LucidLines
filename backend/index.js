const express = require('express');
require('dotenv').config();
const authRouter = require("./routes/auth.route");



const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.use("/auth", authRouter);


app.listen(3000, console.log("server listening on port 3000"));

