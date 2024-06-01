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
function agregarLibro (){
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
}
function buscarLibro(){
    let searchLib = (document.getElementById('buscarcategoria').value);

    const filtroLibros = listaLibros.filter((libro) => libro.categoria.toLowerCase() == searchLib)

    let librosOrdenados = '';

    filtroLibros.forEach((libro) => {
        librosOrdenados += `Título: ${libro.titulo}\nAutor: ${libro.autor}\nAño: ${libro.año}\nCategoria: ${libro.categoria}\n\n`;
    });

    document.getElementById('mostrarcategoria').textContent=librosOrdenados;
}

//convertir la colecion a cadena json y de nuevo a objeto
const nuelibros=JSON.stringify(listaLibros)

/*const nuevoslibros=JSON.parse(nuelibros)

const nuevoslibro=JSON.stringify(nuevoslibros)*/


console.log(nuelibros)

/*fs.writeFile('lista_libros.json', nuevoslibros, (error)=>{
    if (error) throw error;
    console.log("informacion recibida")
})*/
