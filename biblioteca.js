const listaLibros = [
    {
        "titulo": "Cien años de soledad",
        "autor": "Gabriel Garcia Marquez",
        "año": 1967,
        "categoria": "Realismo magico"
    },
    {
        "titulo": "1984",
        "autor": "George Orwell",
        "año": 1949,
        "categoria": "Ficcion"
    },
    {
        "titulo": "Scorpio City",
        "autor": "Mario Mendoza",
        "año": 1998,
        "categoria": "Ficcion"
    },
    {
        "titulo": "Los sauces",
        "autor": "Algernon Blackwood",
        "año": 1907,
        "categoria": "Terror"
    }
]

function agregarLibro() {
    let nLibTitulo = (document.getElementById('titulo').value);
    let nLibAutor = (document.getElementById('autor').value);
    let nLibAño = parseInt(document.getElementById('año').value);
    let nLibCategoria = (document.getElementById('categoria').value);

    const nuevoLibro = {
        "titulo": nLibTitulo,
        "autor": nLibAutor,
        "año": nLibAño,
        "categoria": nLibCategoria
    }
    listaLibros.push(nuevoLibro);
    console.log(listaLibros)
}
function buscarLibro() {
    let searchLib = (document.getElementById('buscarcategoria').value);

    const filtroLibros = listaLibros.filter((libro) => libro.categoria.toLowerCase() == searchLib)

    let librosOrdenados = '';

    filtroLibros.forEach((libro) => {
        librosOrdenados += `Título: ${libro.titulo}\nAutor: ${libro.autor}\nAño: ${libro.año}\nCategoria: ${libro.categoria}\n\n`;
    });

    document.getElementById('mostrarcategoria').textContent = librosOrdenados;
    console.log(filtroLibros)
}


//solo me guarda los libros predefenidos en la constante listaLibros, mas no los que agrego despues :(
const nuelibros = JSON.stringify(listaLibros)
console.log(nuelibros)

const { error } = require('console');
const fs = require('fs')
fs.writeFile('lista_libros.json', nuelibros, (error) => {
    if (error) throw error;
    console.log("informacion recibida ;)")
});

//leer los objetos de la lista en consola node.js
fs.readFile('lista_libros.json', 'utf8', (err, data) => {
    if (err) {
    console.log("Ha ocurrido un error al leer el archivo:", err);
    } else {
    // Convertir la cadena JSON a objetos JavaScript
    const bibliotecaJSON = JSON.parse(data);
    console.log("La colección de libros ha sido leída desde 'biblioteca.json':",
    bibliotecaJSON);
    }
    });

