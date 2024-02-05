let idade = 21
let paisPresentes = false;
let comprouBilhete = false;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;


console.log(`Pode viajar: ${podeViajar}`);

let msgMaiorIdade = (idade >= 18) ? "É maior de idade" : "É menor de 18 anos"

console.log(msgMaiorIdade);