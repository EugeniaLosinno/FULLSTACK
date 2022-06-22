let bt1Enviar = document.getElementById("bt1Enviar");

let respuestaSuma7 = document.getElementById("respuestaSuma7");

let dado1;
let dado2;
let cantidad_7=0;

bt1Enviar.addEventListener("click", () => {
  for(let i =0; i<=1000; i++){
    dado1 = Math.round(Math.random()*6);
    dado2 = Math.round(Math.random()*6);
    if ( (dado1+dado2) ===7){
      cantidad_7 ++;
    }
  }  
  respuestaSuma7.innerHTML = `La cantidad de veces que salio 7 sumando ambos datos es : ` + cantidad_7;
  console.log(respuestaSuma7.innerHTML);
});