// O valor any pode receber qualquer tipo: string, boolean, number, etc.

let valorAny: any;
valorAny = 3;
valorAny = 'ola';
valorAny = true;

let valorString: string = 'teste';
valorString = valorAny;
let valorString2: string = 'testao'

function somarString(string1: string, string2: string){
    console.log(string1+string2);
}

somarString(valorString, valorString2);
somarString('ola',', como vai?');