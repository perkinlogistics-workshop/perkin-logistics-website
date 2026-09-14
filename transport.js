const animationButton = document.getElementById("animation-toggle");
animationButton.addEventListener("click", () => {
  const paused = document
    .getElementById("services")
    .classList.toggle("animations-paused");
  animationButton.setAttribute("aria-pressed", String(paused));
  animationButton.textContent = paused ? "Play animations" : "Pause animations";
});
