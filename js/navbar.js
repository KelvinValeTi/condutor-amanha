const menuSanduiche = document.getElementById("menu-sanduiche");
const logoMenu = document.getElementById("logo-menu");
const btnMenu = document.getElementById("btn-menu");

const navBar = document.getElementById("nav-bar");

const ulMenu = document.getElementById("ul-menu");

let statusMenu = false; //false - fechado / true - aberto

//responsivo
var pagina = window.matchMedia("(max-width:749px)");

//FUNÇÕES
function abrirMenu(){

    logoMenu.classList.toggle("hide");
    btnMenu.classList.toggle("hide");
    
    // menuSanduiche.style.paddingLeft = "40px";
    // menuSanduiche.style.paddingTop = "10px";
    menuSanduiche.style.transform = "rotate(90deg)";
    menuSanduiche.style.transition = "1s";

    navBar.style.flexDirection= "column";
    navBar.style.alignItems="flex-start";
    
    navBar.style.transition = "1s";
    ulMenu.style.display="flex";

    statusMenu = true;
}

function fecharMenu(){
    logoMenu.classList.toggle("hide");
    btnMenu.classList.toggle("hide");
    
    // menuSanduiche.style.removeProperty("padding-left");
    // menuSanduiche.style.removeProperty("padding-top");
    menuSanduiche.style.transform = "rotate(0deg)";
    menuSanduiche.style.transition = "1s";

    navBar.style.flexDirection= "row";
    navBar.style.alignItems="center";
    
    ulMenu.style.transition = "1s";
    ulMenu.style.display="none";

    statusMenu = false;
}


//EVENTOS
menuSanduiche.addEventListener("click", ()=>{
    if(statusMenu==true){
        fecharMenu();
    }else{
        abrirMenu();
    }
});

pagina.addEventListener("change", ()=>{
    if(pagina.matches){
        //window.alert("entrou");
        ulMenu.style.display="none";

    }else{
        //caso mude de tamanho com o menu aberto
        navBar.style.flexDirection= "row";
        navBar.style.alignItems="center";
        ulMenu.style.display ="flex";
        
        menuSanduiche.style.removeProperty("padding-left");
        menuSanduiche.style.removeProperty("padding-top");
        menuSanduiche.style.transform = "rotate(0deg)";
        menuSanduiche.style.transition = "1s";
        if(logoMenu.classList.contains("hide")){
            logoMenu.classList.toggle("hide");
        }
        if(btnMenu.classList.contains("hide")){
            btnMenu.classList.toggle("hide");
        }
        statusMenu = false;
    }
});