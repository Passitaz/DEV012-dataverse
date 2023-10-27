export const renderItems = (data) => {

  let lista = "";

  //lista.className= 'card';
  data.forEach(element => {
    lista += `<li>
  
    <dl itemscope itemtype="Artist">"
    <img class="imag" src="${element.imageUrl}" alt="imagen" />
    <dt>Nombre:</dt><dd itemprop="name">${element.name}</dd>
    <dt>Descripción:</dt><dd itemprop="description">${element.shortDescription}</dd>
    <dt>Género:</dt><dd itemprop="yearOfBirth">${element.facts.Genre}</dd>
    <dt>Número de Albumnes:</dt><dd itemprop="placeOfBirth">${element.facts.Albums}</dd>
    <dt>Solista o grupo:</dt><dd itemprop="mainField">${element.facts.Artist}</dd>
    </dl>
    </li>`
    
  });
 
  return `<ul>${lista}</ul>`;
};
