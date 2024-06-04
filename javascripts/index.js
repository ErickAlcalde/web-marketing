function cambiarTitulo(){
    var titulo = document.getElementById("titleMod")
    if(window.innerWidth <= 600){
        titulo.textContent = "¿Queres que nos contactemos con vos?"
    }else{
        titulo.textContent = "¿Queres que nos"
    }
}
window.addEventListener("resize", cambiarTitulo);
        window.addEventListener("load", cambiarTitulo);