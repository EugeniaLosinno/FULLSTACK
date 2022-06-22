let bt1Enviar = document.getElementById("bt1Enviar");
let bt2Enviar = document.getElementById("bt2Enviar");
let bt3Enviar = document.getElementById("bt3Enviar");
let bt4Enviar = document.getElementById("bt4Enviar");

let numero_1 = document.getElementById("numero_1");
let numero_2 = document.getElementById("numero_2");

let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

let respuesta = document.getElementById("respuesta");

let numeroSuma;
let numeroResta;
let cantidad=0;

function sumar(cantidad, num1) {
  return cantidad + num1;
}

function restar(cantidad, num1){
  return cantidad - num1;
}

bt1Enviar.addEventListener("click", () => {
    cantidad = sumar(cantidad, 1);
    respuesta.innerHTML = `La cantidad de click es : ` + cantidad;
    console.log(respuesta.innerHTML);
});

bt2Enviar.addEventListener("click", () => {
    cantidad = restar(cantidad, 1)
    respuesta.innerHTML = `La cantidad de click es : ` + cantidad;
    console.log(respuesta.innerHTML);
});

bt3Enviar.addEventListener("click", () => {
    numeroSuma = Number(numero_1.value);
    cantidad = sumar(cantidad,numeroSuma)
    respuesta.innerHTML = `La cantidad de click es : ` + cantidad;
    console.log(respuesta.innerHTML);
});
 
bt4Enviar.addEventListener("click", () => {
   numeroResta = Number(numero_2.value); 
   cantidad = restar(cantidad, numeroResta);
   respuesta.innerHTML = `La cantidad de click es : ` + cantidad;
   console.log(respuesta.innerHTML);
});