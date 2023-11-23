// Obtener el elemento al que le vamos a agregar los nodos creados
const contenedor = document.getElementById('container');

//Crear los nodos

    //Nodo parrafo:
const parrafo = document.createElement('p');
parrafo.innerText ="Hey I’m red!";
parrafo.style.color = "red";

    //Nodo titulo h3
const titulo = document.createElement('h3');
titulo.innerText = "I’m a blue h3!"
titulo.style.color = "blue"

//Agregar los elementos al elemento padre
contenedor.append(parrafo);
contenedor.append(titulo);