import { computeStats, filterData, sortData } from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";

//const { totalAlbums } = require('./data');

describe("computeStats", () => {
  it("debe devolver el total correcto de álbumes", () => {
    const resultado = computeStats(fakeData);

    expect(resultado).toBe(324);
  });
});

describe("filterData", () => {
  it("Debe devolver el total de álbumes después del filtrado por Genero Pop", () => {
    const filteredData = filterData(fakeData, "genre", "Pop");
    const totalAlbumsInFilteredData = computeStats(filteredData);

    expect(totalAlbumsInFilteredData).toBe(110);
  });
});

describe("filterData", () => {
  it("Debe devolver el total de canciones de genero Rock", () => {
    const totalCancionesRock = filterData(fakeData, "genre", "Rock");

    expect(totalCancionesRock.length).toBe(8);
  });
});

describe("filterData", () => {
  it("Debe devolver el total de canciones de genero Cumbia", () => {
    const totalCancionesRock = filterData(fakeData, "genre", "Cumbia");

    expect(totalCancionesRock.length).toBe(8);
  });
});

describe("filterData", () => {
  it("Debe devolver el total de canciones de genero Jazz", () => {
    const totalCancionesJazz = filterData(fakeData, "genre", "Jazz");

    expect(totalCancionesJazz.length).toBe(0);
  });
});

describe("sortData", () => {
  it("Debe devolver el nombre del artista en posicion 0 cuando se ordene de la A - Z sobre la data completa", () => {
    const sortedData = sortData(fakeData, 'name', 'asc');
    const firstArtistName = sortedData[0].name;

    expect(firstArtistName).toBe("Alejandro Sanz");
    //console.log(firstArtistName);
  });
});

describe("sortData", () => {
  it("Debe devolver el nombre del artista en posicion 0 cuando se ordene de la Z - A en el genero Cumbia", () => {
    const filteredData = filterData(fakeData, 'genre', 'Cumbia');
    const sortedData = sortData(filteredData, 'name', 'desc');
    const secondArtistName = sortedData[0].name;

    expect(secondArtistName).toBe("Selena");
    //console.log(secondArtistName);
  });
});