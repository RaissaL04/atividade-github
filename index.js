
// Solicitar um número ao usuário
const numero = parseInt(prompt("Digite um número para calcular a tabuada:"));

// Verificar se o número é válido
if (!isNaN(numero)) {
    // Imprimir a tabuada do número de 1 a 10
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
} else {
    console.log("Por favor, digite um número válido.");
}
// Solicitar um número ao usuário
 numero = parseInt(prompt("Digite um número para calcular a tabuada e o fatorial:"));

// Verificar se o número é válido
if (!isNaN(numero)) {
    // Imprimir a tabuada do número de 1 a 10
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        const resultadoTabuada = numero * i;
        console.log(`${numero} x ${i} = ${resultadoTabuada}`);
    }

    // Calcular o fatorial do número
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    console.log(`Fatorial de ${numero} = ${fatorial}`);
} else {
    console.log("Por favor, digite um número válido.");
}
