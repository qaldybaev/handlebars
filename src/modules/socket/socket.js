export const socketHandler = (io) => {
    io.on("connection", (socket) => {
      console.log("Foydalanuvchi ulandi");
  
      socket.on("joinRoom", ({ username, room }) => {
        socket.join(room);  
        
        socket.emit("chatMessage", `Xush kelibsiz, ${username}! Siz ${room} xonasidasiz.`);
        
        socket.to(room).emit("chatMessage", `${username} xonaga kirdi.`);
      });
  
     
      socket.on("chatMessage", ({ msg, room }) => {
        io.to(room).emit("chatMessage", msg); 
      });
  
    });
  };
  