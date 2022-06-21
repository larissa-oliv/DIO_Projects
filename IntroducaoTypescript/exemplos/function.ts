// Definindo o tipo de valor de retorno da função
function somarValoresNumericos(numero1: number, numero2: number): number {
    return numero1 + numero2;
}
console.log(somarValoresNumericos(1, 3));



// Usando o void em funções
function printaValoresNumericos(numero1: number, numero2: number): void
// void é usado quando não há um retorno
{
    console.log(numero1 + numero2)
}



//Usando Callback em funções
function somarValoresNumericosETratar(numero1: number, numero2: number, callback: (numero: number) => number) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}

function aoQuadrado(numero: number): number {
    return numero * numero;
}

function dividirPorEleMesmo(numero: number): number {
    return numero / numero;
}

console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));
console.log(somarValoresNumericosETratar(1, 3, dividirPorEleMesmo));