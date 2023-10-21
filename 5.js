//5. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais longas.

let distancia = undefined; 
let valorFinal = undefined;
let valorKm = undefined;

do {
    distancia = parseInt(prompt("Digite a distância que vais percorrer."));
} while (isNaN(distancia));

if (distancia <= 200){
    valorKm = 0.5
} else if (distancia > 200) {
    valorKm = 0.45
} 

valorFinal = distancia * valorKm

document.write(`<p>A distância pretendida é de ${distancia} km.</p>`)
document.write(`<p>O valor do km é de R$${valorKm.toFixed(2)}.</p>`)
document.write(`<p>O valor final da viagem é de R$${valorFinal.toFixed(2)}.</p>`)