// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {    
    let nombre = document.getElementById("amigo").value;
    if (nombre === "") {
        alert("Por favor, inserte un nombre");
        document.getElementById("limpiar_lista").visible=false;
    }
    amigos.push(nombre);
    document.getElementById("amigo").value="";
    actualizarListaAmigos();
}

function actualizarListaAmigos(){
    lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""
    for (i = 0; i <= amigos.length - 1; i++) {
        let nuevoItem = document.createElement('li');
        nuevoItem.textContent = amigos[i];
        listaAmigos.appendChild(nuevoItem);
    }
    
}

function sortearAmigo(){
    if (amigos !== ""){
        indice = Math.floor(Math.random() * amigos.length);
        nombreSorteado = amigos[indice];
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "El amigo sorteado es: " + nombreSorteado;
    }
}
function limpiar_lista(){
    if (amigos !== ""){
       
        document.getElementById("listaAmigos").innerHTML = "";
        amigos= [];
    }
}