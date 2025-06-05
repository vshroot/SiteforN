function checkPassword() {
  const correctPassword = "Spivakusha"; // Задай свой пароль здесь
  const entered = document.getElementById("password").value;

  if (entered === correctPassword) {
    window.location.href = "player.html";
  } else {
    document.getElementById("error").textContent = "Неверный пароль!";
  }
}
