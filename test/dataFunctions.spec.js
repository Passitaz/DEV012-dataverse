import { computeStats, filterData } from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";

//const { totalAlbums } = require('./data');

describe('computeStats', () => {
  it('debe devolver el total correcto de álbumes', () => {
    // Llama a la función con un conjunto de datos de prueba
    //const mockData = [
    //  { facts: { albums: 100 } },
    //  { facts: { albums: 200 } },
    //  { facts: { albums: 24 } },
    //];

    const resultado = computeStats(fakeData);
    //const resultado2 = computeStats(mockData);
    console.log(resultado);

    // Comprueba si el resultado es igual al valor esperado
    expect(resultado).toBe(324);
    //expect(resultado2).toBe(324);
  });
});

describe('filterData', () => {
  it ('Debe devolver el total de canciones de genero Rock', () => {
    const totalCancionesRock = filterData (fakeData, "genre", "Rock")

    expect(totalCancionesRock.length).toBe(8);
  });
});
