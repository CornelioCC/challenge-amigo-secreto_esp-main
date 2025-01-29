// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let campo = document.getElementById('amigo').value;
    if(campo == ""){
        alert("Por favor, inserte un nombre");
    }else{
        amigos.push(campo);
        document.getElementById('amigo').value = "";
        actualizarLista();
    }
}

function actualizarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    let i;
    for(i = 0; i <= amigos.length - 1; i++){
        lista.innerHTML += `<li>${amigos[i]}<li><br>`;
    }
}

function sortearAmigo() {
    if(amigos.length > 0){
        let numeroAleatorio = Math.floor(Math.random() * (amigos.length));
        let listaResultado = document.getElementById('resultado');
        listaResultado.innerHTML = `<li>${amigos[numeroAleatorio]}</li>`;
    }else{
        alert("Aun no has agregado amigos");
    }
    
}