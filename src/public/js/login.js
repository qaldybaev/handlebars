const loginForm = document.querySelector("#login-form");
const usernameInput = document.querySelector("#username");
const roomSelect = document.querySelector("#room");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = usernameInput.value.trim();
  const room = roomSelect.value;

  if (username && room) {
    localStorage.setItem("username", username);
    localStorage.setItem("room", room);

    // Foydalanuvchi chat sahifasiga yo'naltiriladi
    window.location.href = `/chat?username=${username}&room=${room}`;
  } else {
    alert("Foydalanuvchi nomi va xona tanlashni unutmang.");
  }
});
