import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

console.log(example, renderItems(data), data);

const contenedorCanciones = document.querySelector("#root");
contenedorCanciones.innerHTML = renderItems(data);

