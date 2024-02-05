let idade = 16
let paisPresentes = false;
let comprouBilhete = true;
const podeViajar = (idade > 18 || paisPresentes) && comprouBilhete;


console.log(`Pode viajar: ${podeViajar}`);

if (!comprouBilhete) {
    console.log("Não comprou o bilhete")
} else {
    if (idade >= 18){
        console.log("Não é maior de idade")
    } else {
        console.log("opa! é menor de idade")
    }
}