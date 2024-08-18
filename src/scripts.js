window.onscroll = function() {
    const navbar = document.getElementById("navbar");
    if (window.pageYOffset > 0) {
        navbar.style.backgroundColor = "#111";  // Muda a cor do menu ao rolar a página]
        navbar.style.border = "1px solid #152331";
    } else {
        navbar.style.backgroundColor = "black";  // Cor original do menu
        navbar.style.border = "none";
    }
};