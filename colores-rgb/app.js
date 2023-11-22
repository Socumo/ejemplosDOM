//Primero debemos obtener los elementos del Dom
const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

//Necesitamos tener una referencia a los textos del parrafo 

const valorRojo = document.getElementById("texto-rojo");
const valorVerde = document.getElementById("texto-verde");
const valorAzul = document.getElementById("texto-azul");

/*Definir unas variables que serán utilies para poder especificar el color rgb
cada valor debe de estar en un valor entre 0 y 255*/
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

/*console.log(rojo);
console.log(verde);
console.log(azul);*/

//Actualizar el texto de los parrafos:

valorRojo.innerText = rojo;
valorVerde.innerText = verde;
valorAzul.innerText = azul;

//Crear una función para actualizar el color 

function actualizarColor (rojo,verde,azul) {
    const colorRGB = `rgb(${rojo},${verde},${azul})`;
    document.body.style.backgroundColor = colorRGB;
}

//Para actualizar el color rojo
inputRojo.addEventListener('change', (e) =>{
    rojo = e.target.value;
    valorRojo.innerText = rojo;
    actualizarColor (rojo, verde, azul);
});

//Para actualizar el color verde
inputVerde.addEventListener('change', (e) =>{
    verde = e.target.value;
    valorVerde.innerText = verde;
    actualizarColor (rojo, verde, azul);
});
//Para actualizar el color azul
inputAzul.addEventListener('change', (e) =>{
    azul = e.target.value;
    valorAzul.innerText = azul;
    actualizarColor (rojo, verde, azul);
});
