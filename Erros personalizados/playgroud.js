//Atividade: validação de erros por tipo
//O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.
//Crie uma função que recebe um array e um número
//Realize as seguintes validações
//Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
//Se o array não for do tipo 'object', lance um erro do tipo TypeError
//Se o número não for do tipo 'number', lance um erro do tipo TypeError
//Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
//Utilize a declaração try...catch
//Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof

function validaArray(arr, num) {

    try {
        if (!arr && !num) throw new ReferenceError("Envie os parâmetros");

        if (typeof arr !== 'object') throw new TypeError("O array precisa ser do tipo object");

        if (typeof arr !== 'number') throw new TypeError("Num precisa ser do tipo number");

        if (arr.length !== num) throw new RangeError('Tamanho inválido');

        return arr;
    }
    catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError")
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError")
            console.log(e.message)
        } else if (e instanceof RangeError) {
            console.log("Este erro é um RangeError")
            console.log(e.message)
        } else {
            console.log("Ocorreu um tipo de erro não esperado: " + e)
        }
    }
}

console.log (validaArray([], 5));