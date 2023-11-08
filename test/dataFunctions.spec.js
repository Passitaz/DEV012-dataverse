import { computeStats } from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";

//console.log(fakeData);

//const { totalAlbums } = require('./data');

describe("computeStats", () => {
  it("debe devolver el total correcto de álbumes", () => {
    // Llama a la función con un conjunto de datos de prueba
    const data = [
      { facts: { albums: 100 } },
      { facts: { albums: 200 } },
      { facts: { albums: 24 } },
    ];

    const resultado = computeStats(data);

    // Define el valor esperado
    const valorEsperado = 324; // La suma de los álbumes en el conjunto de datos de prueba

    // Comprueba si el resultado es igual al valor esperado
    expect(resultado).toBe(valorEsperado);
  });
});
