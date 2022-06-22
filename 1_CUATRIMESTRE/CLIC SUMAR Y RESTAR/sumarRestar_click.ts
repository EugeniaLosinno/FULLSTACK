let bt1Enviar = <HTMLButtonElement>document.getElementById("bt1Enviar");
let bt2Enviar = <HTMLButtonElement>document.getElementById("bt2Enviar");
let bt3Enviar = <HTMLButtonElement>document.getElementById("bt3Enviar");
let bt4Enviar = <HTMLButtonElement>document.getElementById("bt4Enviar");

let numero_1 = <HTMLInputElement>document.getElementById("numero_1");
let numero_2 = <HTMLInputElement>document.getElementById("numero_2");

let rotulo1 = <HTMLParagraphElement>document.getElementById("rotulo1");
let rotulo2 = <HTMLParagraphElement>document.getElementById("rotulo2");

let respuesta = <HTMLParagraphElement>document.getElementById("respuesta");

let numeroSuma: number;
let numeroResta: number;
let cantidad:number =0;

function sumar(cantidad: number, num1: number): number {
  return cantidad + num1;
}

function restar(cantidad: number, num1: number): number {
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