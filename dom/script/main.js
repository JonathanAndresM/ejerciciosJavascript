
let calcular = document.getElementById("calcular");

calcular.addEventListener("click", function () {
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let alturaM2 = (altura / 100) * (altura / 100)
    let imc = peso / alturaM2
    document.getElementById("resultado").innerText = "Tu masa corporal es de " + imc.toFixed(2);
})


let dolar = document.getElementById("dolar")
dolar.addEventListener("input", function usa(){
    arg = dolar.value * 0.0011354217524099
})
let arg = document.getElementById("pesoArg")
arg.addEventListener("input", function peso(){
   dolar =  arg.value * 880.73
})
