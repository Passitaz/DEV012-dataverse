
# Data Verse

## Resumen

En este proyecto se construyó una página web para visualizar un conjunto de datos generado con prompting. En este proyecto utilizamos herramientas de inteligencia artificial: ChatGPT para generar el set de datos.

El proyecto consta de una página web que permite visualizar la data (Música), filtrarla (por género), ordenarla (de manera ascendente "A-Z" y descendente "Z-A") y calcular alguna estadística (La suma del número total de albmes vendidos de cada artista por género). 

## Consideraciones generales

* Este proyecto se resolvió en duplas.

## Funcionalidades

El usuario podrá acceder a una página web que le permita visualizar la data, filtrarla, ordenarla, además de calcular la estadística. La información se podrá visualizar en forma de tarjetas. El diseño de la página cumple la metodología MobileFirst.

## Criterios de código

* HTML (uso de HTML semántico)
* CSS (uso de selectores de CSS)
* Web APIs (uso de selectores del DOM, manejo del eventos del DOM y manipulación dinámica del DOM)
* JavaScript: (variables, uso de condicionales, uso de blucles/ciclos, funciones, arrays, objetos y módulos de ECMAScript)

## Criterios del proyecto

#### Historias de usuario

* Yo como usuario quiero visualizar una página web para que me muestre información de artistas por medio de tarjetas.
* Yo como usuario quiero filtrar esas tarjetas para visualizarlas por género musical.
* Yo como usuario quiero ordenar de manera ascendente y descendente esas tarjetas en el filtro aplicado.
* Yo como usuario quiero visualizar el cálculo de una estadística sobre el total de los albumns visibles.

#### Generación de datos

La data fue generada con ayuda de la IA (Inteligencia Artificial): ChatGPT.

![gpt-data-to-ui](https://raw.githubusercontent.com/Passitaz/DEV012-dataverse/main/Data%20(ChatGPT)/ChatGPT2.jpg)

## Diseño de interfaz de usuario

* Prototipo de baja fidelidad: se diseñó un prototipo incial que consta de la información que quiere ver el usuario.

![baja-data-to-ui](https://raw.githubusercontent.com/Chio-jua/DEV012-dataverse/main/figma/bajafidelidad.png)

* Prototipo de alta fidelidad: se diseñó un prototipo más claro y definido como base para crear una interfaz de usuario.

![baja-data-to-ui](https://raw.githubusercontent.com/Chio-jua/DEV012-dataverse/main/figma/altafidelidad.png)

## Pruebas

#### Pruebas unitarias

Se realizaron pruebas unitarias de:
* Filtro (dos pruebas)
* Ordenamiento (dos pruebas)
* Cálculo de estadística (dos pruebas)
* Excepción (una prueba)
#### Test 

Se ejecutaron las pruebas solicitadas, obteniendo un 100% de aprobación.

``` sh
npm run test:oas-html
npm run test:oas-css
npm run test:oas-web-api
npm run test:oas-js
npm run test:oas-prompting
npm run test:oas 
```