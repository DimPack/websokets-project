const http = require("http");
const { Server } = require("socket.io");
const Message = require("./models/Message");
const app = require("./app");
const port = process.env.PORT || 3000;
const server = http.createServer(app);

const io = new Server(server);
io.on("connection", (socket) => {

  console.log("connection to socket");
  socket.on("newMessage", async (dataMsg) => {
    try {
        console.log("event newMessage: ", dataMsg);
        const msg = await Message.create(dataMsg);
        if (!msg) {
            return socket.emit("badMsg", 'invalid message');
        }
        io.emit("newMessage", msg);
    } catch (error) {
        socket.emit("error", error);
    }
  });
  socket.on("disconnect", (reason) => {
    console.log("disconnected, reason: ", reason);
  });
});

server.listen(port, () => console.log(`server start at port ${port}`));
