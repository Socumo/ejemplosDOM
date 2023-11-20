/*para obtener un elemento del Dom por el ID podemos usar: 
.getElementById()*/

const contenedor = document.getElementById('contenedor');
//console.log(contenedor);
//console.log(contenedor.innerHTML);

/*una de las propiedades es innerHTML nos da acceso a la estructura html
que esta contenido dentro del elemento contenedor, lo que nos devuelve es una cadena de 
de caracteres y se puede ver el tipo console.log(typeof contenedor.innerHTML); lo anterior nos 
devuleve un string*/

/*ahora seleccionaremos el titulo*/


const titulo = document.getElementById("titulo");
console.log(titulo.innerText); //obtengo el texto del titulo.
console.log(titulo.tagName); //obtengo el nombre de la etiqueta.

/*OBTENER LOS ELEMENTOS POR MEDIO DE SUS CLASES*/

const toppings =  document.getElementsByClassName("topping");
console.log(toppings); // esto funciona como un arreglo 
console.log(toppings[0]); // de esta forma puedo mostrar el primer elemento 
console.log(toppings[0].id); //así puedo obtener el id

/*como seleccionar todos los elementos que tengan una etiqueta especifica en HTML*/

const misToppings = document.getElementsByTagName("li");
console.log(misToppings);