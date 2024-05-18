
let notas = [
    {
        id: 1,
        titulo: "Sacar la basura",
        texto: "mi mamá me va a retar si no lo hago",
        realizado: false
    }
]
console.log(notas)
let idGlobal = 1
let titulo = document.getElementById("titulo");
let texto = document.getElementById("texto");
let agregar = document.getElementById("agregar")
let limpiar = document.getElementById("limpiar")
let crearNotas = document.getElementById("contenedorNotas")

function agregarNota() {
    if (notas.length == 0) {
        let tarjeta = {
            id: 1,
            titulo: titulo.value,
            texto: texto.value,
            realizado: false
        }
        notas.push(tarjeta)
    } else {
        for (let i = 0; i < notas.length; i++) {
            notas.push(
                {
                    id: [i++],
                    titulo: titulo.value,
                    texto: texto.value,
                    realizado: false
                }
            )
        }
    }
    arrayNotas(notas, crearNotas)
}

function limpiarCampos() {
    titulo.value = "";
    texto.value = "";
}

function marcarRealizada(indice, notas) {
    notas[indice].realizada = !(notas[indice].realizada)
    arrayNotas(notas, crearNotas)
}

arrayNotas(notas, crearNotas)

function eliminarNota(indice) {
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] === notas[indice]) {
            notas.splice(i, 1)
        }
    }
    arrayNotas(notas, crearNotas)
}

function arrayNotas(allNotas, crearNotas) {
    crearNotas.innerHTML = ""
    for (let i = 0; i < allNotas.length; i++) {
        ingresarNota(crearNotas, allNotas[i], i)
    }
}

function ingresarNota(crearNotas, arrayNotas, indice) {
    let divNotas = document.createElement("div")
    divNotas.classList.add("card", "rounded-4", "h-2");
    divNotas.style.width = "15rem";
    divNotas.innerHTML = `<div class="card-body rounded-4">
    <h5 class="card-title">${arrayNotas.titulo}</h5>
    <input onClick="marcarRealizada(${indice},notas)" type="checkbox" ${arrayNotas.realizada ? "checked" : ""} >
    <p class="card-text ${arrayNotas.realizada ? "text-decoration-line-through" : ""}">${arrayNotas.texto}</p>
    <input class="bg-danger rounded-4" onclick="eliminarNota(${indice})" type="button" value="Eliminar">
    </div>`
    crearNotas.appendChild(divNotas)
}
let notasRealizadas = document.getElementById("realizadas")

notasRealizadas.addEventListener("change", (realizadas) => {
    let checkboxNotas = document.querySelectorAll("input[type=checkbox]:checked")
    console.log(checkboxNotas)
    let notasYaRealizadas = notas.filter(notas => {
        for (let i = 0; i < checkboxNotas.length; i++) {
            if (checkboxNotas[i].value == notas.realizado) {
                return notas
            }
            
        }
       notas.realizado == realizadas.target.value 
    })
    if(checkboxNotas.length != 0){
        arrayNotas(notasYaRealizadas, crearNotas)
    } else {
        arrayNotas(notas, crearNotas)
    }
})

let buscar = document.getElementById("buscar")

buscar.addEventListener("input",(buscador) => {
    console.log(buscador.target.value);

    let notasBuscadas = notas.filter(notas => notas.titulo.toLowerCase().includes(buscador.target.value))

    if (buscador.target.value != "") {
        arrayNotas(notasBuscadas,crearNotas)
    }else{
        arrayNotas(notas,crearNotas)
    }
})

agregar.addEventListener("click", agregarNota)
limpiar.addEventListener("click", limpiarCampos)