document.querySelector("#boton").addEventListener("click", function () {
    alert("Has hecho click izquierdo sobre el boton");
});

document.querySelector("#Titulo").addEventListener("dblclick", function () {
    alert("Has clickado en el titulo! PERO QUE MALOTE")
});

function cambiarColor() {
    document.querySelector("#Titulo").style.color = "blue";
}

function moverDePagina() {
    if (document.querySelector("#Titulo").style.color == "blue") {
        document.location.href = "https://www.google.com";
    }
}