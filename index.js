
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
