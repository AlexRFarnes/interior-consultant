const toggleButton = document.getElementById("toggle-button");
const nav = document.getElementById("mobile-nav");
const navLinks = document.querySelectorAll('.mobile-navigation-item')

toggleButton.addEventListener("click", () => {
    // Toggle navigation 
    nav.classList.toggle("mobile-nav-active");

    // Burger animation
    toggleButton.classList.toggle('toggle');

    //Animate links
    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation="";
        }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 9 + 0.2}s`;
        }
    })
})