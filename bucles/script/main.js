//Ejercicio 1
console.log("Ejercicio 1")
let numMultiplo = parseInt(prompt("Ingrese un número para multiplicar"))
for (let multiplicador = 0; multiplicador < 11; multiplicador++) {
    let resultado = numMultiplo * multiplicador;
    console.log(resultado);
}

//Ejercicio 2
console.log("Ejercicio 2")
let numIngresado = parseInt(prompt("Ingrese un Número"))
let sumado = numIngresado
while (numIngresado > 0) {
    numIngresado = parseInt(prompt("Ingrese un Número"))
    sumado += numIngresado
}
console.log(sumado)

//Ejercicio 3
console.log("Ejercicio 3")
let numSecreto = 34
let numSecretoIngresado
let intentos = 0
do {
    numSecretoIngresado = parseInt(prompt("Ingrese un Número"))
    if (numSecretoIngresado > numSecreto) {
        console.log("Ingresaste un número mayor");
    }
    if (numSecretoIngresado < numSecreto) {
        console.log("Ingresaste un número menor");
    }
    intentos++
} while (numSecreto != numSecretoIngresado) {
    numSecretoIngresado == numSecreto
    console.log("Ganaste con " + intentos + " intentos")
}

//Ejercicio 4
console.log("Ejercicio 4")
let numPrimo = parseInt(prompt("Ingrese un Número"))
let primo = 2
while (numPrimo % primo != 0) {
    primo += 1
    if (numPrimo == primo) {
        console.log(numPrimo + " es primo");
        numPrimo = parseInt(prompt("Ingrese un Número"))
    } else {
        console.log(numPrimo + " no es primo");
        numPrimo = parseInt(prompt("Ingrese un Número"))
    }
}

//Ejercicio 5
console.log("Ejercicio 5")
let numDivisor = parseInt(prompt("Ingrese un Número"))
for (let dividir = 0; dividir < 10; dividir++) {
    let resultado = numDivisor / dividir
    console.log(resultado);
}

//Ejercicio 6
console.log("Ejercicio 6")
let marcaMoto = ["Yamaha", "BMW", "Honda", "Zanella", "Kawasaki", "Zusuki", "Motomel", "Brava", "Gilera", "Mondial"]
for (let mensaje = 0; mensaje < marcaMoto.length; mensaje++) {
    console.log(marcaMoto[mensaje]);
}

//Ejercicio 7
console.log("Ejercicio 7")
let numArray = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
for (let mensaje = 0; mensaje < numArray.length; mensaje++) {
    console.log(numArray[mensaje]);
}

//Ejercicio 8
console.log("Ejercicio 8")
let familia = [{
    nombre: "Jonathan",
    edad: 34,
    altura: 170,
    cabelloColor: "Castaño"
}, {
    nombre: "Daiana",
    edad: 33,
    altura: 164,
    cabelloColor: "Castaño"
}, {
    nombre: "Francesco",
    edad: 7,
    altura: 123,
    cabelloColor: "Rubio"
}, {
    nombre: "Norma",
    edad: 56,
    altura: 158,
    cabelloColor: "Rubio"
}, {
    nombre: "Eduardo",
    edad: 55,
    altura: 170,
    cabelloColor: "Castaño"
}]
for (let element of familia) {
    console.table(element)
}

//Ejercicio 9
console.log("Ejercicio 9")
let numTodos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let inpar of numTodos) {
    if (inpar % 2 != 0) {
        console.log(inpar)
    }
}

//Ejercicio 10
console.log("Ejercicio 10")
let numeroIngresado = parseInt(prompt("Ingrese un número"))
let pares = numeroIngresado
let inpares = numeroIngresado

while (numeroIngresado != 0) {
    if (numeroIngresado % 2 == 0) {
        pares = numeroIngresado = parseInt(prompt("Ingrese un número"))
        pares = numeroIngresado + pares
        console.log(pares);
    }
    if (numeroIngresado % 2 != 0) {
        inpares = numeroIngresado = parseInt(prompt("Ingrese un número"))
        inpares += numeroIngresado
        console.log(inpares);
    }
} console.log("pares: " + pares + " inpares: " + inpares);


//Ejercicio 11
console.log("Ejercicio 11")
let numMayor = [56, 34, 84, 33, 7, 55, 70, 27, 21, 3];
console.log(Math.max(...numMayor));


//Ejercicio 12
console.log("Ejercicio 12")
let numMenor = [56, 34, 84, 33, 7, 55, 70, 27, 21, 5];
console.log(Math.min(...numMenor));

//Ejercicio 13
console.log("Ejercicio 13")
const jugador1 = prompt("Ingrese su nombre")
const jugador2 = prompt("Ingrese su nombre")
while (jugador1 && jugador2) {
    jugador1[jugada1 = prompt("Ingrese piedra papel o tijera para jugar")]
    jugador2[jugada2 = prompt("Ingrese piedra papel o tijera para jugar")]
    jugada1 === "piedra" || jugada1 === "papel" || jugada1 === "tijera" && jugada2 === "piedra" || jugada2 === "papel" || jugada2 === "tijera"
    if (jugada1 === jugada2) {
        console.log("Empataron")
    } else {
        if (jugada1 === "piedra" && jugada2 === "tijera") {
            console.log(jugador1 + " ah ganado.")
            break
        } else if (jugada1 === "papel" && jugada2 === "piedra") {
            console.log(jugador1 + " ah ganado.")
            break
        } else if (jugada1 === "tijera" && jugada2 === "papel") {
            console.log(jugador1 + " ah ganado.")
            break
        } else {
            console.log(jugador2 + " ah ganado.")
            break
        }

    }
}

//Ejercicio 14
console.log("Ejercicio 14")
let asterisco = " "
for (let triangulo = 0; triangulo < 5; triangulo++) {
    asterisco += "*"
    console.log(asterisco)
}

//Ejercicio 15
console.log("Ejercicio 15")
let asteriscoInv = " "
for (let triangulo = 0; triangulo < 5; triangulo++) {
    let asterisco = '*'
    for (let invertir = 1; invertir < 5 - triangulo; invertir++) {
        asterisco = asterisco = '*'
    }
    for (let invertir = 0; invertir < triangulo - 1; invertir++) {
        asterisco = asterisco + ' '
    }
    console.log(asteriscoInv);
}

//Ejercicio 16
console.log("Ejercicio 16")
let desordenado = [56, 34, 84, 33, 7, 55, 70, 27, 21, 5];
console.log(desordenado)
for (let ordenado = 0; ordenado < desordenado.length; ordenado++) {
    for (let ordenar = 0; ordenar < desordenado.length - 1; ordenar++) {
        if (desordenado[ordenar] > desordenado[ordenar + 1]) {
            let enOrden = desordenado[ordenar + 1]
            desordenado[ordenar + 1] = desordenado[ordenar]
            desordenado[ordenar] = enOrden
        }
    } //console.log("interacion "+ordenado+" : "+desordenado)
} console.log(desordenado)
