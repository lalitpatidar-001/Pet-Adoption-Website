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
const chatRouter = require('./routers/chat');
const messageRouter = require('./routers/message');

// const whitelist = [
//   '*'
// ];

// app.use((req, res, next) => {
//   const origin = req.get('referer');
//   const isWhitelisted = whitelist.find((w) => origin && origin.includes(w));
//   if (isWhitelisted) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//   }
//   // Pass to next layer of middleware
//   if (req.method === 'OPTIONS') res.sendStatus(200);
//   else next();
// });


// middlewares
const myurl = process.env.ENVIRONMENT ==="Development" ?"http://localhost:5173":"https://pet-adoption-website-lac.vercel.app"
app.use(cors({
  origin:myurl, 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/profiles', express.static(path.join(__dirname, 'profiles')));
app.use('/messageImages', express.static(path.join(__dirname, 'messageImages')));

// routers
app.use("/api/auth", auhtRouter);
app.use("/api/post", postRouter);
app.use("/api/user", userRouter);
app.use("/api/adoption-request", adoptionRequestRouter);
app.use("/api/chat", chatRouter);
app.use("/api/message", messageRouter);


// create socket server 
const server = new http.createServer(app)
const url = process.env.ENVIRONMENT ==="Development" ?"http://localhost:5173":"https://pet-adoption-website-lac.vercel.app"
// socket config
const io = new Server(server, {
  cors: {
    origin: url,
    methods: ["GET", "POST"],
    credentials:true,  
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
io.on("connection", (socket) => {
  console.log("user connected");
  console.log("socket Id ", socket.id)
  const user_id = (socket.handshake.query["user_id"]); // connected user's id

  if (Boolean(user_id)) {
    putUser(user_id, socket.id);
  }
  console.log(onlineUsers);

  socket.on("sent_new_message", (data) => {
    console.log("message", data);
    const { to, from } = data;
    console.log("to", to)
    const to_user_socketId = getUser(to);
    console.log(to_user_socketId)
    if (to_user_socketId) {
      console.log("called")
      io.to(to_user_socketId).emit("new_message_arrived", data);
    }
  })

})

// server config
server.listen(process.env.PORT, () => {
  console.log("servetr is running...")
})
