const passwordScreen = document.getElementById("passwordScreen");
const envelope = document.getElementById("envelope");
const content = document.getElementById("content");
const music = document.getElementById("music");
const toggleBtn = document.getElementById("toggleMusic");
const checkPasswordBtn = document.getElementById("checkPassword");
const passwordInput = document.getElementById("passwordInput");
const passwordError = document.getElementById("passwordError");

checkPasswordBtn.addEventListener("click", () => {
  if (passwordInput.value === "04012025") {
    passwordScreen.style.display = "none";
    envelope.style.display = "flex";
    
  } else {
    passwordError.textContent = "Senha incorreta. Tente novamente 💔";
  }
});

envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  content.classList.remove("hidden");
  content.classList.add("show");
  music.play();
  showHearts();
});

toggleBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggleBtn.textContent = "🔊";
  } else {
    music.pause();
    toggleBtn.textContent = "🔇";
  }
});

function showHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
}