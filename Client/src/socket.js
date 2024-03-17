import io from "socket.io-client";


let socket;

const connectSocket = (user_id, callback) => {
    console.log("user_iddd", user_id); // Verify user_id value
    socket = io("http://localhost:4000", {
        query: `user_id=${user_id}`
    });

    // Call the callback function after the socket connection is established
    // socket.on("connect", () => {
    //     callback(socket);
    // });
}

export { socket, connectSocket };