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

    //Div con border negro y de fondo color rosa

const contenedorSecundario = document.createElement('div');
//set
contenedorSecundario.style.backgroundColor = 'pink';
contenedorSecundario.style.border = '5px solid black';
//contenedorSecundario.style.width = '100px';
//contenedorSecundario.style.height = '100px';

    //Crear un h1 y un p para ingresarlo en contenedorSecundario
const tituloh1 = document.createElement("h1");
tituloh1.innerText = "I’m in a div";

const parrafo2 = document.createElement("p");
parrafo2.innerText = "Me too!"

contenedorSecundario.append(tituloh1);
contenedorSecundario.append(parrafo2);

//Agregar los elementos al elemento padre
contenedor.append(parrafo);
contenedor.append(titulo);
contenedor.append(contenedorSecundario);