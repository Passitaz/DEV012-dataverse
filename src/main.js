import { genero, ordenamiento } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

console.log(renderItems(data), data);

const contenedorCanciones = document.querySelector("#root");
contenedorCanciones.innerHTML = renderItems(data);

//Filtro
const filtrado = document.querySelector('[data-testid="select-filter"]');
filtrado.addEventListener("change", function(e){
    console.log(e.target.value)
    const generos = genero(data, e.target.value);
    contenedorCanciones.innerHTML = renderItems(generos);
});

//Ordenamiento
const orden = document.querySelector('[data-testid="select-sort"]');
orden.addEventListener("change", function(e){
    console.log(e.target.value)
    const orden = ordenamiento(data, e.target.value);
    contenedorCanciones.innerHTML = renderItems(orden);
});

//Boton
const boton = document.querySelector('[data-testid="button-clear"]');
boton.addEventListener('click', function(){

    filtrado.value = "blanco1";
    orden.value = "blanco2";
    
    const generos = genero(data, filtrado.value);
    const ordenar = ordenamiento(data, orden.value);

    contenedorCanciones.innerHTML = renderItems(ordenar);
})