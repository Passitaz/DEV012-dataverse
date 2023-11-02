export const genero = (data, gener) => {
const genroFiltrado = data.filter(item => item.facts.genre === gener);
 
  return genroFiltrado;
}

export const ordenamiento = (genroFiltrado, criterio) => {

  if(criterio === "asc"){
    return genroFiltrado.slice().sort((a, b) => a.name.localeCompare(b.name));
  }else if (criterio === "desc"){
    return genroFiltrado.slice().sort((a, b) => b.name.localeCompare(a.name));
  }
  return genroFiltrado;
}
