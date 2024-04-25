//Ejercicio 1
let num1 = 20
let num2 = 18
if (num1 > num2) {
    console.log("Eres mayor que " + num2)
} else {
    console.log("No eres mayor que " + num2)
}

//Ejercicio 2
let num3 = 20
let num4 = 20
if (num3 == num4) {
    console.log("Eres igual que " + num4)
} else {
    console.log("No eres igual que " + num4)
}

//Ejercicio 3
let num5 = 20
let num6 = 18
if (num5 > num6) {
    console.log("Eres mayor que " + num6)
} else if (num5 == num6) {
    console.log("Eres igual que " + num6)
}
else {
    console.log("Eres menor que " + num6)
}

//Ejercicio 4
let num7 = 20
let num8 = 18
let num9 = 16
if (num7 < num8 && num7 < num9) {
    console.log("num7 es el menor")
} else if (num8 < num7 && num8 < num9) {
    console.log("num8 es el menor")
} else if (num7 == num8 && num7 == num9) {
    console.log("los tres numeros son iguales")
} else {
    console.log("num9 es el menor")
}

//Ejercicio 5
let persona1 = {
    nombre: "Jonathan",
    edad: 34,
    altura: 170
}
let persona2 = {
    nombre: "Daiana",
    edad: 33,
    altura: 154
}
if (persona1.altura > persona2.altura) {
    console.log(persona1.nombre + " es mas alto que " + persona2.nombre);
} else {
    console.log(persona1.nombre + " es mas bajo que " + persona2.nombre);
}

if (persona1.edad > persona2.edad) {
    console.log(persona1.nombre + " es mayor que " + persona2.nombre);
} else {
    console.log(persona1.nombre + " es menor que " + persona2.nombre);
}

//Ejercicio 6
let datoConductor = {
    nombre: prompt("Ingresa tu nombre"),
    edad: parseInt(prompt("Ingrese su edad")),
    altura: parseInt(prompt("Ingrese su altura en centimetros")),
    vision: parseInt(prompt("Ingrese su nivel de vision"))
}
let edadMayor
let alturaMayor
let visionAlta
if(datoConductor.edad>18){
    edadMayor = true
}
if(datoConductor.altura>150){
    alturaMayor = true
}
if(datoConductor.vision>8){
    visionAlta = true
}
if(edadMayor==true && alturaMayor==true && visionAlta==true){
    console.log(datoConductor.nombre+" eres apto para conducir")
}else{
    console.log(datoConductor.nombre+" no eres apto para conducir")
}

//Ejercicio 7
let datoPase = {
    nombre: prompt("Ingrese su nombre"),
    pase: confirm("Eres Vip?"),
    entrada: confirm("Tienes entradas?")
}
let usarEntrada
let comprarEntrada
let precioEntrada
console.log(datoPase);
if (datoPase.nombre === "Andres" || datoPase.pase == true) {
    console.log("Bienvenido puedes pasar");
} else if (datoPase.entrada == true) {
    usarEntrada = confirm("Quieres usar la entrada?")
    if (usarEntrada == true) {
        console.log("Bienvenido puedes pasar");
    }
} else {
    comprarEntrada = confirm("Quieres comprar la entrada")
        if (comprarEntrada == true){
            precioEntrada = parseInt(prompt("Ingrese su dinero disponible"))
            if (precioEntrada >= 1000) {
                console.log("Entrada comprada. Puedes pasar");
            } else {
                console.log("El dinero no es suficiente para comprar. :(");
            }
        } else {
            console.log("Gracias por visitarnos. Vuelve pronto");
        }
}

//Ejercicio 8
let numeroIncognita = 7
let numeroIngresado = parseInt(prompt("Ingrese un número del 1 al 10. Primer intento!"))
if (numeroIngresado === numeroIncognita) {
    alert("Felicidades el número es el correcto!")
} else if (numeroIngresado < numeroIncognita) {
    alert("Ingresaste un numero menor")
    numeroIngresado = parseInt(prompt("Ingrese un número del 1 al 10. Segundo intento!"))
    if (numeroIngresado === numeroIncognita) {
        alert("Felicidades el número es el correcto!")
    } else if (numeroIngresado < numeroIncognita) {
        alert("Ingresaste un numero menor")
        numeroIngresado = parseInt(prompt("Ingrese un número del 1 al 10. Tercer intento!"))
        if (numeroIngresado === numeroIncognita) {
            alert("Felicidades el número es el correcto!")
        } else {
            alert("Que lastima no lo acertaste :(")
        }
    } else if (numeroIngresado > numeroIncognita) {
        alert("Ingresaste un numero mayor")
        numeroIngresado = parseInt(prompt("Ingrese un número del 1 al 10. Tercer intento!"))
        if (numeroIngresado === numeroIncognita) {
            alert("Felicidades el número es el correcto!")
        } else {
            alert("Que lastima no lo acertaste :(")
        }
    }
} else if (numeroIngresado > numeroIncognita) {
    alert("Ingresaste un numero mayor")
    numeroIngresado = parseInt(prompt("Ingrese un número del 1 al 10. Segundo intento!"))
    if (numeroIngresado === numeroIncognita) {
        alert("Felicidades el número es el correcto!")
    } else if (numeroIngresado < numeroIncognita) {
        alert("Ingresaste un numero menor")
        numeroIngresado = parseInt(prompt("Ingrese un número del 1 al 10. Tercer intento!"))
        if (numeroIngresado === numeroIncognita) {
            alert("Felicidades el número es el correcto!")
        } else {
            alert("Que lastima no lo acertaste :(")
        }
    } else if (numeroIngresado > numeroIncognita) {
        alert("Ingresaste un numero mayor")
        numeroIngresado = parseInt(prompt("Ingrese un número del 1 al 10. Tercer intento!"))
        if (numeroIngresado === numeroIncognita) {
            alert("Felicidades el número es el correcto!")
        } else {
            alert("Que lastima no lo acertaste :(")
        }
    }
}
console.log(numeroIngresado)

//Ejercicio 9
let edadIngresada = parseInt(prompt("Ingrese su edad"))
if(edadIngresada <= 12 ){
    console.log("Eres un infante")
}else if(edadIngresada >= 13 && edadIngresada <= 18){
    console.log("Eres un adolecente")
}else if(edadIngresada >= 19 && edadIngresada <= 45){
    console.log("Eres un mayor joven")
}else if(edadIngresada >= 46){
    console.log("Eres un anciano")
    if(edadIngresada >= 100){
        console.log("En verdad tienes esa edad")
    }
}

//Ejercicio 10
let jugador1 = prompt("Jugador1 ingrese PIEDRA, PAPEL o TIJERA")
let jugador2 = prompt("Jugador2 ingrese PIEDRA, PAPEL o TIJERA")
if ((jugador1 === "PIEDRA" || jugador1 === "PAPEL" || jugador1 === "TIJERA") && (jugador2 === "PIEDRA" || jugador2 === "PAPEL" || jugador2 === "TIJERA")) {
    if (jugador1 === "PIEDRA" && jugador2 === "PAPEL") {
        console.log("jugador2 has ganado")
    } else if (jugador1 === "PAPEL" && jugador2 === "TIJERA") {
        console.log("jugador2 has ganado")
    } else if (jugador1 === "TIJERA" && jugador2 === "PIEDRA") {
        console.log("jugador2 has ganado")
    } else if (jugador1 === "TIJERA" && jugador2 === "PAPEL") {
        console.log("jugador1 has ganado")
    } else if (jugador1 === "PIEDRA" && jugador2 === "TIJERA") {
        console.log("jugador1 has ganado")
    } else if (jugador1 === "PAPEL" && jugador2 === "PIEDRA") {
        console.log("jugador1 has ganado")
    } else if (jugador1 === jugador2) {
        console.log("Han empatado")
    }
} else {
    console.log("Ingresaron un dato incorrecto")
}

//Ejercicio 11
let colorIngresado = prompt("Ingresa tu color favorito")
switch (colorIngresado) {
    case "Blanco":
        console.log("Falta de color")
        break;
    case "Negro":
        console.log("Falta de color")
        break;
    case "Verde":
        console.log("El color de la naturaleza")
        break;
    case "Azul":
        console.log("El color del agua")
        break;
    case "Amarillo":
        console.log("El color del sol")
        break;
    case "Rojo":
        console.log("El color del fuego")
        break;
    case "Marron":
        console.log("El color de la tierra")
        break;

    default:
        console.log("Hermoso color, no lo teniamos pensado")
        break;
}

//Ejercicio 12
let numero1 = parseInt(prompt("Ingresa un número"))
let numero2 = parseInt(prompt("Ingresa un número"))
let operacionMatematica = prompt("Elija una operacion matématica: suma, resta, multiplicacion o division")
let resultado
if (numero1 <= 0 || numero2 <= 0) {
    console.log("Debes ingresar un numero a aprtir del 1")
} else {
    if (operacionMatematica === "suma" || operacionMatematica === "resta" || operacionMatematica === "multiplicacion" || operacionMatematica === "division") {
        if (operacionMatematica === "suma") {
            resultado = numero1 + numero2
            if (resultado >= 1) {
                console.log("El resultado es " + resultado);
            } else {
                console.log("ERROR resultado igual o menor a 0(cero)");
            }
        } else if (operacionMatematica === "resta") {
            resultado = numero1 - numero2
            if (resultado >= 1) {
                console.log("El resultado es " + resultado);
            } else {
                console.log("ERROR resultado igual o menor a 0(cero)");
            }
        } else if (operacionMatematica === "multiplicacion") {
            resultado = numero1 * numero2
            if (resultado >= 1) {
                console.log("El resultado es " + resultado);
            } else {
                console.log("ERROR resultado igual o menor a 0(cero)");
            }
        } else if (operacionMatematica === "division") {
            resultado = numero1 / numero2
            if (resultado >= 1) {
                console.log("El resultado es " + resultado);
            } else {
                console.log("ERROR resultado igual o menor a 0(cero)");
            }
        }
    } else {
        console.log("Elegi una operacion correcta");
    }
}

//Ejercicio 13
let ingresarDatosDNI = {
    nombre: prompt("Ingrese su nombre"),
    apellido: prompt("Ingrese su apellido"),
    numeroDNI: prompt("Ingrese su numéro de DNI"),
    pais: prompt("Ingrese su pais natal"),
    fechaNacimiento: prompt("Ingrese su fecha de nacimiento dd/mm/aaaa"),
    sexo: prompt("Ingrese su sexo")
}
let dni
dni = ingresarDatosDNI.apellido +" "+ ingresarDatosDNI.nombre +" "+ ingresarDatosDNI.numeroDNI +" "+ ingresarDatosDNI.fechaNacimiento +" "+ ingresarDatosDNI.pais +" "+ ingresarDatosDNI.sexo
alert(dni)
dni = confirm("Estos datos son correctos?")
if (dni == true) {
    console.table(ingresarDatosDNI)
    alert("Registro Exitoso")
} else {
    console.log("Vuelva a intentarlo en 1 mes")
    alert("Vuelva a intentarlo en 1 mes")
}

