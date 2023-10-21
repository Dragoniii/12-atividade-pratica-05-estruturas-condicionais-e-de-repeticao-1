//4. Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos para todos, mas especialmente para mulheres. Faça um programa que leia nome, sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo que: a. Homens ganham 5% de desconto b. Mulheres ganham 13% de desconto

let nome = (prompt("Digite seu nome.")).toUpperCase();
let sexo = (prompt("Digite H para homens e M para mulheres.")).toUpperCase();
let desconto = undefined;
let valorFinal = undefined;
let valorInicial = (Math.round((Math.random() * 100000)))/100;

if (sexo === "H"){
    desconto = 0.95
} else if (sexo === "M") {
    desconto = 0.87
} else {
    alert("Valores inválidos, tente novamente.")
};

valorFinal = desconto * valorInicial

document.write(`<p>Olá ${nome}!</p>`)
document.write(`<p>Seu desconto na compra de hoje é: ${((1 - desconto)*100).toFixed(2)}%.</p>`)
document.write(`<p>O valor inicial do item é: R$${valorInicial}.</p>`)
document.write(`<p>O valor final do item é: R$${valorFinal.toFixed(2)}.</p>`)
