let amigos = [];

//agregar nombres al array
function agregarAmigo() {
  let nombre= document.getElementById("amigo").value;

 //verifcar si el campo esta en blanco
  if (nombre.trim() === "") {
    alert("Por favor, inserte un nombre");
  }

  //evitar que se repita un nombre
  if (amigos.includes(nombre)) {
    alert (`El nombre ${nombre} ya esta incluido.`)
    
  } else {
    amigos.push(nombre);
    document.getElementById("amigo").value = "";
    mostrarListaAmigo();
  }
}

//Actualizar lista en el DOM
function mostrarListaAmigo() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    const element = amigos[index];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}
  //Función para sorterar el nombre
  function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Aún no hay nombres para sortear");
  } else {
    let indiceAmigo = Math.floor(Math.random() * amigos.length);
    let resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = amigos[indiceAmigo];
  }
  
}
