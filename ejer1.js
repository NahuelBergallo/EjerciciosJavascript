
let numero = parseInt(prompt("Ingrese un número: "));


function piramide(numero){ 
  for(let i=1;i<=numero;i++){
    let fila= ''; 
    for(let j=1;j<=i;j++){
      fila += j + ' '; 
    }
    console.log(fila); 
  }
}

piramide(numero); 