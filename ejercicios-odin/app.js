// Obtener el elemento al que le vamos a agregar los nodos creados
const contenedor = document.getElementById('container');

//Crear los nodos

const parrafo = document.createElement('p');
parrafo.innerText ="Hey I’m red!";
parrafo.style.color = "red";


//Agregar los elementos al elemento padre
contenedor.append(parrafo);