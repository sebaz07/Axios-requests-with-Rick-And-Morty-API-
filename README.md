# Consumo de APIs con Axios en javascript
Este proyecto demuestra un consumo basico de una API con Axios en javascript.
## Herramientas
- Axios mediante CDN
- API de [Rick y Morty](https://rickandmortyapi.com)
### Integración de Axios desde CDN
Para integrar la librería de Axios de una forma simple, utilice el CDN, el cual se puede integrar en el archivo HTML de la siguiente manera:
```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```
### integración de tailwindcss desde CDN
Para integrar la librería de tailwindcss de una forma simple, utilice el CDN, el cual se puede integrar en el archivo HTML de la siguiente manera:
```html
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
```
## Consumo de la API
En cuanto al consumo de la API realice una petición GET a la URL de la API de Rick y Morty, la cual me devuelve un objeto con la información de los personajes de la serie.
### Petición GET
Para inciar la petición GET, empece a retornar los objetos de la API en la consola del navegador.
- De igual forma use funciones asincronas para poder esperar la respuesta de la API.

```javascript
const loadData = async () =>{ //arrow function asincrona
    
    const response = await axios.get('https://rickandmortyapi.com/api/character/') //peticion get a la api
    const personajes = response.data.results //obtengo los resultados de la peticion
    console.log(personajes) //muestro los resultados en consola
}

loadData() //llamo a la funcion
```
### Recorrer los objetos de la API con forEach
Para recorrer los objetos de la API, utilice el método forEach, el cual me permite recorrer cada objeto y mostrarlo en la consola.
```javascript
const loadData = async () =>{
    
    const response = await axios.get('https://rickandmortyapi.com/api/character/')
    const personajes = response.data.results
    personajes.forEach((personaje) =>{
        console.log(personaje)
    })
}

loadData()
```
### Renderizar los objetos en el HTML
Para renderizar los objetos en el HTML, cree un container para almacenar los personajes y un template para mostrar la información de cada personaje al cargar los datos con `loadData()`.
- Se crearon los elementos HTML necesarios para mostrar la información de los personajes.
- Se añadieron los elementos creados al container.
- Se añadió el container al body del HTML.

```js
const container = document.getElementById('container')

const loadData = async () =>{
    const response = await axios.get('https://rickandmortyapi.com/api/character/')
    const personajes = response.data.results
    personajes.forEach((personaje) =>{
        console.log(personaje)

        const card = document.createElement('div')

        const h1 = document.createElement('h1')
        h1.innerText = personaje.name

        const img = document.createElement('img')
        img.src = personaje.image

        card.append(h1,img)
        container.appendChild(card)
    })
    document.body.append(ul)
} 

loadData()
```

