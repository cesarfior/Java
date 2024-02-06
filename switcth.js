// let diaSemana = 7 
// if (diaSemana === 0){
//     console.log("Hoje é segunda")
// } else if (diaSemana === 1){
//     console.log("Hoje é terça")
// }

let diaSemana = 7
let dia = ""
switch (diaSemana) {
    case 0:
        dia = "Segunda"
        break
    case 1: 
        dia = "Terça"
        break
    case 2:
        dia = "Quarta"
        break
    case 3:
        dia = "Quinta"
        break
    case 4:
        dia = "Sexta"
        break
    case 5:
        dia = "Sabado"
        break
    case 6: 
        dia = "Domingo"
        break
    default:
        dia = "___"
    
}
console.log(`hoje é ${dia}`)