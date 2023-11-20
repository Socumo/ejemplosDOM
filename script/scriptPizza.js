/*para obtener un elemento del Dom por el ID podemos usar: 
.getElementById()*/

const contenedor = document.getElementById('contenedor');
//console.log(contenedor);
console.log(contenedor.innerHTML);

/*una de las propiedades es innerHTML nos da acceso a la estructura html
que esta contenido dentro del elemento contenedor, lo que nos devuelve es una cadena de 
de caracteres y se puede ver el tipo console.log(typeof contenedor.innerHTML); lo anterior nos 
devuleve un string*/

/*ahora seleccionaremos el titulo*/


const titulo = document.getElementById("titulo");
console.log(titulo.innerText); //obtengo el texto del titulo.
console.log(titulo.tagName); //obtengo el nombre de la etiqueta.