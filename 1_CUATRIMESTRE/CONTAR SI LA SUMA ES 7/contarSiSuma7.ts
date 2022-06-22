let bt1Enviar = <HTMLButtonElement>document.getElementById("bt1Enviar");

let respuestaSuma7 = <HTMLParagraphElement>document.getElementById("respuestaSuma7");

let dado1: number;
let dado2: number;
let cantidad_7:number =0;

bt1Enviar.addEventListener("click", () => {
  for(let i:number =0; i<=1000; i++){
    dado1 = Math.round(Math.random()*6);
    dado2 = Math.round(Math.random()*6);
    if ( (dado1+dado2) ===7){
      cantidad_7 ++;
    }
  }  
  respuestaSuma7.innerHTML = `La cantidad de veces que salio 7 somando ambos datos es : ` + cantidad_7;
  console.log(respuestaSuma7.innerHTML);
});