const socket = io("http://localhost:3000");

    // localStorage'dan foydalanuvchi nomi va xona nomini olish
    const username = localStorage.getItem("username");
    const room = localStorage.getItem("room");

    if (!username || !room) {
      window.location.href = "/";
    }

    document.getElementById("room-name").textContent = room;

    // Socketga foydalanuvchi va xona bilan kirish
    socket.emit("joinRoom", { username, room });

    const form = document.querySelector("#chat-form");
    const msgInput = document.querySelector("#msg");
    const chatBox = document.querySelector("#chat-box");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const msg = msgInput.value;
      socket.emit("chatMessage", { msg, room });
      msgInput.value = ""; // Inputni tozalash
    });

    socket.on("chatMessage", (msg) => {
      const p = document.createElement("p");
      p.textContent = msg;
      chatBox.appendChild(p);
      chatBox.scrollTop = chatBox.scrollHeight; // Yangi xabarni oxiriga qo'shish
    });