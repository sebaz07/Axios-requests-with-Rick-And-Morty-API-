# Consumo de APIs con Axios en JavaScript
Este proyecto demuestra un consumo básico de una API con Axios en JavaScript.
## Imagen de la página
![Imagen de la página](/static/Image.png)
## Herramientas
- Axios mediante CDN
- API de [Rick y Morty](https://rickandmortyapi.com)
- TailwindCSS mediante CDN

### Integración de Axios desde CDN
Para integrar la librería de Axios de una forma simple, utilice el CDN, el cual se puede integrar en el archivo HTML de la siguiente manera:
```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```
### Integración de TailwindCSS desde CDN
Para integrar la librería de TailwindCSS de una forma simple, utilice el CDN, el cual se puede integrar en el archivo HTML de la siguiente manera:
```html
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
```
## Consumo de la API
En cuanto al consumo de la API, realicé una petición GET a la URL de la API de Rick y Morty, la cual me devuelve un objeto con la información de los personajes de la serie.
### Petición GET
Para iniciar la petición GET, empecé a retornar los objetos de la API en la consola del navegador.
- De igual forma, usé funciones asíncronas para poder esperar la respuesta de la API.

```javascript
const loadData = async () => { //arrow function asíncrona
    
    const response = await axios.get('https://rickandmortyapi.com/api/character/') //petición GET a la API
    const personajes = response.data.results //obtengo los resultados de la petición
    console.log(personajes) //muestro los resultados en consola
}

loadData() //llamo a la función
```
### Recorrer los objetos de la API con forEach
Para recorrer los objetos de la API, utilicé el método forEach, el cual me permite recorrer cada objeto y mostrarlo en la consola.
```javascript
const loadData = async () => {
    
    const response = await axios.get('https://rickandmortyapi.com/api/character/')
    const personajes = response.data.results
    personajes.forEach((personaje) => {
        console.log(personaje)
    })
}

loadData()
```
### Renderizar los objetos en el HTML
Para renderizar los objetos en el HTML, creé un container para almacenar los personajes y un template para mostrar la información de cada personaje al cargar los datos con `loadData()`.
- Se crearon los elementos HTML necesarios para mostrar la información de los personajes.
- Se añadieron los elementos creados al container.
- Se añadió el container al body del HTML.

```js
const container = document.getElementById('container')

const loadData = async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/character/')
    const personajes = response.data.results
    personajes.forEach((personaje) => {
        console.log(personaje)

        const card = document.createElement('div')

        const h1 = document.createElement('h1')
        h1.innerText = personaje.name

        const img = document.createElement('img')
        img.src = personaje.image

        card.append(h1, img)
        container.appendChild(card)
    })
    document.body.append(container)
} 

loadData()
```
### Estilos con TailwindCSS
Para darle estilos a los elementos creados, utilicé la librería de TailwindCSS, la cual me permite añadir clases de estilos a los elementos HTML.
- Añadí clases de TailwindCSS a los elementos creados.
- Añadí clases de TailwindCSS al container.
- Añadí clases de TailwindCSS al body.

```js
const container = document.getElementById('container')

const loadData = async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/character/')
    const personajes = response.data.results
    personajes.forEach((personaje) => {
        console.log(personaje)

        const card = document.createElement('div')
        card.className = 'bg-gray-800 p-4 rounded-lg border-4 border-transparent hover:border-green-500 hover:shadow-xl hover:shadow-green-600 hover:bg-gray-700'

        const h1 = document.createElement('h1')
        h1.innerText = personaje.name
        h1.className = 'text-xl font-bold text-green-400 mb-2 text-center'

        const img = document.createElement('img')
        img.src = personaje.image
        img.className = 'w-48 h-48 object-cover rounded-full mx-auto mb-4'

        card.append(h1, img)
        container.appendChild(card)
    })
    document.body.append(container)
} 

loadData()
```
Finalmente, se añadieron las clases de TailwindCSS al container y al body.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>

</head>
<body class="bg-gray-900 text-white">

    <h1 class="text-3xl font-bold text-center text-green-400 my-6">Rick and Morty Characters</h1>

    <div id="container" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
    </div>
    
    <script type="module" src="index.js"></script>
</body>
</html>
```
