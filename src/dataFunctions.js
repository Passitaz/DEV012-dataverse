export const filterData = (data, filterBy, value) => {
const genroFiltrado = (data || filterBy).filter(item => item.facts.genre === value);
 
  return genroFiltrado;
}

export const sortData = (data, sortBy, sortOrder) => {

  if(sortOrder === "asc"){
    return (data || sortBy).slice().sort ((a, b) => a.name.localeCompare(b.name));
  }else if (sortOrder === "desc"){
    return (data || sortBy).slice().sort ((a, b) => b.name.localeCompare(a.name));
  }
  return genroFiltrado;
}

export const computeStats = (data) => {

 //const suma = genroFiltrado.reduce ((acc, item) => {
 //   if (item.albums=== value) acc ++;
 // return acc;
 // }, 0);
 console.log(suma);
}