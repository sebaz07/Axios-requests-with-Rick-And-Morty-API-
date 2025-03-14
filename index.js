const container = document.getElementById('container')

const loadData = async () =>{
    const response = await axios.get('https://rickandmortyapi.com/api/character/')
    const personajes = response.data.results
    personajes.forEach((personaje) =>{
        console.log(personaje)

        const card = document.createElement('div')
        card.className = 'bg-gray-800 p-4 rounded-lg border-4 border-transparent hover:border-green-500 hover:shadow-xl hover:shadow-green-600 hover:bg-gray-700'


        const h1 = document.createElement('h1')
        h1.innerText = personaje.name
        h1.className = 'text-xl font-bold text-green-400 mb-2 text-center'

        const img = document.createElement('img')
        img.src = personaje.image
        img.className = 'w-48 h-48 object-cover rounded-full mx-auto mb-4'

        card.append(h1,img)
        container.appendChild(card)
    })
    document.body.append(ul)
} 

loadData()