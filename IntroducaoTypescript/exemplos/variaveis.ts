type input = number | string;

function somarValores(input1: number | string, input2: number | string) {
    if (typeof input1 === "string" || typeof input2 === "string") {
        return input1.toString() + input2.toString();
        // Colocar o toString garante que ambos os inputs são strings, ou seja, não terei a "soma" de string com Number.
    } else {
        return input1 + input2
    }
}

console.log(somarValores(1,5));
console.log(somarValores('ola',', tudo bem?'));
console.log(somarValores('1','5'));