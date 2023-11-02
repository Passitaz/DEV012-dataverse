import { genero, ordenamiento, suma } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

console.log(renderItems(data), data);

const contenedorCanciones = document.querySelector("#root");
contenedorCanciones.innerHTML = renderItems(data);
let newData = data;

//Filtro
const filtrado = document.querySelector('[data-testid="select-filter"]');
filtrado.addEventListener("change", function(e){
    console.log(e.target.value)
    const generos = genero(data, e.target.value);
    newData = generos;
    contenedorCanciones.innerHTML = renderItems(generos);
});

//Ordenamiento
const orden = document.querySelector('[data-testid="select-sort"]');
orden.addEventListener("change", function(e){
    console.log(e.target.value);
    const ordenado = ordenamiento(newData, e.target.value);
    contenedorCanciones.innerHTML = renderItems(ordenado);
});

//Estadistica
const stadistic = document.getElementById ('estadistica');
const frase = "Total  de Albums: ";
const sumaData = suma(data);
stadistic.innerHTML = frase + sumaData;


//Boton
const boton = document.querySelector('[data-testid="button-clear"]');
boton.addEventListener('click', function(){

    filtrado.value = "blanco1";
    orden.value = "blanco2";
    newData = data;

    contenedorCanciones.innerHTML = renderItems(newData);
})