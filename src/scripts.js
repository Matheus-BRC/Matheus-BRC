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

function adjustLayout() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    // alert(screenWidth);
    if(screenWidth <= 1200){
        document.getElementsByClassName("logo")[0].style.justifyContent = "center";
        document.getElementsByClassName("menu")[0].style.display = "none";
        document.getElementsByClassName("contato")[0].style.display = "none";
        document.getElementsByClassName("menu-hamburger")[0].style.display = "flex";
        document.getElementsByClassName("foto")[0].style.display = "flex";
    }
    else{
        document.getElementsByClassName("logo")[0].style.justifyContent = "end";
        document.getElementsByClassName("menu")[0].style.display = "flex";
        document.getElementsByClassName("contato")[0].style.display = "flex";
        document.getElementsByClassName("menu-hamburger")[0].style.display = "none";
        document.getElementsByClassName("foto")[0].style.display = "none";
    }
}

// Ajusta o layout ao carregar a página e ao redimensionar
window.addEventListener('load', adjustLayout);
window.addEventListener('resize', adjustLayout);