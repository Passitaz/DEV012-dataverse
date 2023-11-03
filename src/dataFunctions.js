export const filterData = (data, filterBy, value) => {
const genroFiltrado = (data || filterBy).filter(item => item.facts.genre === value);
 
const sumaTotal = computeStats(genroFiltrado);
console.log(sumaTotal);
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
  const albumCounts = data.map(item => parseInt(item.facts.albums));
  const sumaTotal = albumCounts.reduce((acumulador, valor) => acumulador + valor, 0); 

  console.log(sumaTotal);
  return sumaTotal;
}