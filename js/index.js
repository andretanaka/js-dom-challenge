const data = [
    {
        id: 1,
        description: 'Drama'
    },
    {
        id: 2,
        description: 'Comédia',
    },
    {
        id: 3,
        description: 'Suspense'
    },
    {
        id: 4,
        description: 'Ficção'
    },
    {
        id: 5,
        description: 'Terror'
    },
    {
        id: 6,
        description: 'Comédia romântica'
    },
    {
        id: 7,
        description: 'Ficção científica'
    },
    {
        id: 8,
        description: 'Desenho'
    }
]

let generos = data.map((genero) => `<p class="item-genero">ID: ${genero.id} | Descrição: ${genero.description}</p>`)

let divGenero = document.getElementById('generos')

generos.forEach(elemento => {
    divGenero.innerHTML = divGenero.innerHTML + elemento
});
//divGenero.innerHTML = generos

console.log(divGenero)
console.log(generos)
console.log("teste")