const express = require('express');
const app = express();
const mongoose = require('mongoose');
require("dotenv").config();
const cors = require('cors');
const path = require('path');
const http = require("http");
const { Server } = require("socket.io");


// router imports
const auhtRouter = require('./routers/auth');
const postRouter = require('./routers/post');
const userRouter = require('./routers/user');
const adoptionRequestRouter = require('./routers/adoptionRequest');

// middlewares
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/profiles', express.static(path.join(__dirname, 'profiles')));

// routers
app.use("/api/auth", auhtRouter);
app.use("/api/post", postRouter);
app.use("/api/user", userRouter);
app.use("/api/adoption-request", adoptionRequestRouter);


// create socket server 
const server = new http.createServer(app)

// socket config
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    }
})



// DB config
mongoose.connect(process.env.DB_URL)
    .then(() => console.log("DB Connected."))
    .catch(error => console.log("db error", error));

// Initialize an empty onlineUsers object
const onlineUsers = {};

// Function to add a key-value pair to the onlineUsers
function putUser(key, value) {
  onlineUsers[key] = value;
}

// Function to get the value associated with a key from the onlineUsers
function getUser(key) {
  return onlineUsers[key];
}

// Function to remove a key-value pair from the onlineUsers
function removeUser(key) {
  if (key in onlineUsers) {
    delete onlineUsers[key];
    console.log(`Key '${key}' has been removed from the onlineUsers.`);
  } else {
    console.log(`Key '${key}' does not exist in the onlineUsers.`);
  }
}

// socket event listners
io.on("connection" , (socket)=>{
    console.log("user connected");
    console.log("socket Id ",socket.id)
    const user_id = (socket.handshake.query["user_id"]); // connected user's id

    if(Boolean(user_id)){
        putUser(user_id,socket.id);
    }
    console.log(onlineUsers);
    
})

// server config
server.listen(process.env.PORT, () => {
    console.log("servetr is running...")
})
