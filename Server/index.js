const express = require('express');
const app = express();
const mongoose = require('mongoose');
require("dotenv").config();
const cors = require('cors');
const path = require('path');

// router imports
const auhtRouter = require('./routers/auth');
const postRouter = require('./routers/post');
const userRouter = require('./routers/user');

// middlewares
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/profiles', express.static(path.join(__dirname, 'profiles')));

// routers
app.use("/api/auth",auhtRouter);
app.use("/api/post",postRouter);
app.use("/api/user",userRouter);



// DB config
mongoose.connect(process.env.DB_URL).then(()=>console.log("DB Connected.")).catch(error=>console.log("db error" , error ));

// server config
app.listen(process.env.PORT,()=>{
    console.log("servetr is running...")
})
