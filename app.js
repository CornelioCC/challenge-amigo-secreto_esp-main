// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let campo = document.getElementById('amigo').value;
    if(campo == ""){
        alert("Por favor, inserte un nombre");
    }else{
        amigos.push(campo);
        document.getElementById('amigo').value = "";
    }
}