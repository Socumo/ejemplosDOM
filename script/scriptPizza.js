const toppings = document.getElementsByClassName("topping");


function mostrarClic (e){
    console.log(e.target.innerText);
}
for(const topping of toppings){
    //console.log(topping);
    topping.addEventListener('click',mostrarClic);
}

/*otra alternativa si la funcion es pequeña, se puede definir en 
el propio listener con una funcion flecha:

for(const topping of toppings){
    topping.addEventListener('click',(e) => {
    console.log(e.target.innerText);
});
}
*/