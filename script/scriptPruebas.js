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
//console.log(toppings); // esto funciona como un arreglo 
//console.log(toppings[0]); // de esta forma puedo mostrar el primer elemento 
//console.log(toppings[0].id); //así puedo obtener el id

/*como seleccionar todos los elementos que tengan una etiqueta especifica en HTML*/

const misToppings = document.getElementsByTagName("li");
//console.log(misToppings);

/*como seleccionar un elemento que cumpla un criterio de un selector 
css, tenemos dos métodos diferentes  .querySelector() nos permite seleccionar el primer 
elemento que cumpla ese criterio y .querySelectorAll() nos permite seleccionar 
todos los que cumplan ese criterio*/

const primerTopping = document.querySelector("ul li.fondo-verde");
console.log(primerTopping);
const excluirVerde = document.querySelector("ul li:not(.fondo-verde)");
console.log(excluirVerde); //me encuentra al primer elemento que no es verde

/*querySelectorAll()*/

const toppingsVerdes = document.querySelectorAll("ul li.fondo-verde");
console.log(toppingsVerdes);

const toppingsNaranja = document.querySelectorAll(".topping.fondo-naranja");
console.log(toppingsNaranja);


/*Asignar estilo con javascript

const primerTopping = document.querySelector(".topping.fondo-verde");
console.log(primerTopping.style); //puedo ver todas las propiedades que puedo modificar

primerTopping.style.backgroundColor = "blue"; //cambio el color de fondo
primerTopping.style.color ="black"; // cambio el color de las letras
primerTopping.style.textTransform = "uppercase"; //mayúsculas

*/

/*Texto el el DOM (Acceder al texto)
const listaToppings = document.getElementById("lista");
console.log(listaToppings);
//hay tres formas de acceder al texto 
console.log(listaToppings.innerText);
// Me muestra solo el texto
console.log(listaToppings.textContent);
//Me devuelve el texto y los expacios de la sangria en el html
console.log(listaToppings.innerHTML);
//me retorna la estructura html interna de ese elemento como un string 
*/

/*Modificar el texto del DOM y modificarlo con Javascript

const titulo = document.getElementById("titulo");
//console.log(titulo.innerText);
titulo.innerText = "Mis favoritos";

*/

/*MODIFICAR LOS ATRIBUTOS DE UN ELEMENTO
const enlace = document.getElementsByTagName("a");
console.log(enlace[0].getAttribute("href")); //Con esto obtenego el valor del atributo href
//para eliminar un atributo podemos utilizar remove
//console.log(enlace[0].removeAttribute("href"));

//para actualizar el atributo
console.log(enlace[0].setAttribute("href", "https://www.kiwilimon.com/receta/botanas/pizza-original-hecha-en-casa"));
*/

/*Agregar y modificar clases de forma dinámica

const primerTopping = document.querySelector(".topping");
//console.log(primerTopping.classList); //obtiene la lista de las clases 

//para agregar una clase a un elemento

primerTopping.classList.add("mi-clase");

*/
/*VERIFICAR SI UNA CLASE EXISTE O NO CON EL MÉTODO CONTAINS

const primerTopping = document.querySelector(".topping");
console.log(primerTopping.classList.contains("fondo-verde"));
*/

/*ELIMINAR UNA CLASE

const primerTopping = document.querySelector(".topping");

primerTopping.classList.remove("topping");
console.log(primerTopping.classList);

*/

/*CREAR UN ELEMENTO DESDE 0
//supongamos que el usuario quiere ingresar un topping nuevo

const listaDeToppings = document.getElementById("lista");
const toppingNuevo = document.createElement("li");

//append es un método que nos permite agregar un nodo dentro de otro elemento
//agregar clases y texto
toppingNuevo.classList.add("topping","fondo-verde");
toppingNuevo.innerText = "Queso extra";

listaDeToppings.append(toppingNuevo);
toppingNuevo.remove(); //se elimina el topping nuevo
listaDeToppings.remove();//se elimina toda la lista de toppings
*/

/*RECORRER EL DOM con parentElement(solo elementos de html) o parentNode(incluye comentarios) 
const listaDeToppings = document.getElementById("lista");
//console.log(listaDeToppings.parentElement.parentElement);//obtengo el padre del padre de la lista de toppings
//si quisiera los "hijos" de la lista de toppings:

//console.log(listaDeToppings.children);
//para obtener el primer "hijo" podemos usar lo siguiete:
console.log(listaDeToppings.children[0]);
/*firstChild y lastChild nos obtienen nodos y sería el texto de la indentación 
pero con firstElementChild y lastElementChild si podemos obtener los datos de HTML

console.log(listaDeToppings.firstElementChild);
console.log(listaDeToppings.lastElementChild);

/*PARA OBTENER LOS "HERMANOS" DE UN ELEMENTO
console.log(listaDeToppings.previousElementSibling);// el "hermano" previo a la lista de toppings
console.log(listaDeToppings.nextElementSibling);// el siguiente hermano de la lista de toppings
*/