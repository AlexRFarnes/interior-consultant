const toggleButton = document.getElementById("toggle-button");
const nav = document.getElementById("mobile-nav");

toggleButton.addEventListener("click", () => {
    nav.classList.toggle("mobile-nav-active");
    toggleButton.classList.toggle('toggle');
})