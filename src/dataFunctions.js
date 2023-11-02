export const genero = (data, value) => {
const genroFiltrado = data.filter(item => item.facts.genre === value);
 
  return genroFiltrado;
}

export const ordenamiento = (genroFiltrado, sortOrder) => {

  if(sortOrder === "asc"){
    return genroFiltrado.slice().sort((a, b) => a.name.localeCompare(b.name));
  }else if (sortOrder === "desc"){
    return genroFiltrado.slice().sort((a, b) => b.name.localeCompare(a.name));
  }
  return genroFiltrado;
}

export const suma = (data, genroFiltrado) => {

 const suma = genroFiltrado.reduce ((acc, item) => {
    if (item.albums=== value) acc ++;
  return acc;
  }, 0);
 console.log(suma);
}