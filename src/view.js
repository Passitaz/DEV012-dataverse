export const renderItems = (data) => {

  let lista = "";

  data.forEach(element => {
    lista += `<li>
    <dl itemscope itemtype="WomenInTech">
    <img class="imag" src="${element.imageUrl}" alt="Ada Lovelace" />
    <dt>Nombre:</dt><dd itemprop="name">${element.name}</dd>
    <dt>Descripción:</dt><dd itemprop="description">${element.shortDescription}</dd>
    <dt>Año de nacimiento:</dt><dd itemprop="yearOfBirth">${element.facts.Genre}</dd>
    <dt>Lugar de nacimiento:</dt><dd itemprop="placeOfBirth">London, England</dd>
    <dt>Campo de desempeño:</dt><dd itemprop="mainField">Computer Science</dd>
    </dl>
    </li>`
  });

  return `<ul>${lista}</ul>`;
};

