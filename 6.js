//6. Faça um programa que leia a largura e o comprimento de um terreno retangular, calculando e mostrando a sua área em m2. O programa também deve mostrar a classificação desse terreno, de acordo com a lista abaixo: 
//Abaixo de 100m2 = TERRENO POPULAR 
//Entre 100m2 e 500m2 = TERRENO MASTER 
//Acima de 500m2 = TERRENO VIP

let area = undefined; 
let largura = undefined;
let comprimento = undefined;
let tipoTerreno = undefined;
const terrenoPopular = "TERRENO POPULAR";
const terrenoMaster = "TERRENO MASTER";
const terrenoVip = "TERRENO VIP";



do {
    largura = parseInt(prompt("Digite a largura do terreno."));
} while (isNaN(largura));

do {
    comprimento = parseInt(prompt("Digite o comprimento do terreno."));
} while (isNaN(comprimento));

area = largura * comprimento

if (area <= 100){
    tipoTerreno = terrenoPopular
} else if (area > 100 && area < 500) {
    tipoTerreno = terrenoMaster
} else if (area > 500) {
    tipoTerreno = terrenoVip
} 

area = largura * comprimento

document.write(`<p>A largura do terreno é ${largura} metros.</p>`)
document.write(`<p>O comprimento do terreno é ${comprimento} metros.</p>`)
document.write(`<p>A área do terreno é ${area} metros quadrados.</p>`)
document.write(`<p>Este é um ${tipoTerreno}.</p>`)