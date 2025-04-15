const socket = io("http://localhost:3000");

    const username = localStorage.getItem("username");
    const room = localStorage.getItem("room");

    if (!username || !room) {
      window.location.href = "/";
    }

    document.getElementById("room-name").textContent = room;

    socket.emit("joinRoom", { username, room });

    const form = document.querySelector("#chat-form");
    const msgInput = document.querySelector("#msg");
    const chatBox = document.querySelector("#chat-box");
    const elMessages = document.querySelector(".chatMessage")

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const msg = msgInput.value;
      socket.emit("chatMessage", { msg, room });
      msgInput.value = ""; 
    });

    socket.on("chatMessage", (msg) => {
      // Vaqtni olish
      const currentTime = new Date().toLocaleTimeString();
  
      elMessages.insertAdjacentHTML(
          "beforeend",
          `<div class="my-message align-self-end">
              <p class="message border d-inline p-2 rounded-3 bg-body-secondary">
                  ${msg}
              </p>
              <div class="author fs-6 fw-bolder text-end mt-1">
                  <span class="text-muted">${username} <span class="ms-2">${currentTime}</span></span>
              </div>
          </div>`
      );
  });
  
  