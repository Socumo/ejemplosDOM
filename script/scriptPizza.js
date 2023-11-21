/*RECORRER EL DOM con parentElement(solo elementos de html) o parentNode(incluye comentarios) */
const listaDeToppings = document.getElementById("lista");
//console.log(listaDeToppings.parentElement.parentElement);//obtengo el padre del padre de la lista de toppings
//si quisiera los "hijos" de la lista de toppings:

//console.log(listaDeToppings.children);
//para obtener el primer "hijo" podemos usar lo siguiete:
console.log(listaDeToppings.children[0]);
/*firstChild y lastChild nos obtienen nodos y sería el texto de la indentación 
pero con firstElementChild y lastElementChild si podemos obtener los datos de HTML*/

console.log(listaDeToppings.firstElementChild);
console.log(listaDeToppings.lastElementChild);

/*PARA OBTENER LOS "HERMANOS" DE UN ELEMENTO*/
console.log(listaDeToppings.previousElementSibling);// el "hermano" previo a la lista de toppings
console.log(listaDeToppings.nextElementSibling);// el siguiente hermano de la lista de toppings