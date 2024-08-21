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

function ajustaLayout() {
    const screenWidth = window.innerWidth;
    // const screenHeight = window.innerHeight;
    // alert(screenWidth);
    if(screenWidth <= 1200){
        document.getElementsByClassName("logo")[0].style.justifyContent = "center";
        document.getElementById("menu").style.display = "none";
        document.getElementById("sociais").style.display = "none";
        document.getElementsByClassName("menu-hamburger")[0].style.display = "flex";
        document.getElementsByClassName("foto")[0].style.display = "flex";
        document.getElementsByClassName("footer-contato")[0].style.flexDirection = "column";
        
        var listItems = document.querySelectorAll('#navbar ul li');     // Seleciona todos os elementos <li> dentro de #navbar
        listItems.forEach(function(li) {                                // Itera sobre cada elemento <li> e altera sua margem
            li.style.margin = '0';                                 // Define a nova margem
        });
    }
    else{
        document.getElementsByClassName("logo")[0].style.justifyContent = "end";
        document.getElementById("menu").style.display = "flex";
        document.getElementById("sociais").style.display = "flex";
        document.getElementsByClassName("menu-hamburger")[0].style.display = "none";
        document.getElementsByClassName("foto")[0].style.display = "none";
        document.getElementsByClassName("footer-contato")[0].style.flexDirection = "row";
    }
}

function mostraMenu(){
    var menu = document.getElementById('menu-suspenso');
    menu.classList.toggle('show'); // Adiciona ou remove a classe "show"
}


// Ajusta o layout ao carregar a página e ao redimensionar
window.addEventListener('load', ajustaLayout);
window.addEventListener('resize', ajustaLayout);