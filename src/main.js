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