function inteiro(){
    let numero;
    let valor;
    numero.push(parseInt(prompt("informe um numero inteiro: ")));
    valor = numero / 2;
    if ( valor === 0 ){
        numero = numero + 1;
        console.log("O numero era par e agora esta impar: " + numero);
    } else {
         numero = numero + 1;
        console.log("O numero era impar e agora esta par: " + numero);
    }
}