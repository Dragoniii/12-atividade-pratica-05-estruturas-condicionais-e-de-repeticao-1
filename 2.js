//2. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final, mostre o total de salários pagos aos homens e o total pago às mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um funcionário.

const usuarios = [];
let continuar = undefined;

while (continuar != 0) {
  let sexo = prompt(
    "Digite 'M' para mulheres ou 'H' para homens."
  ).toUpperCase();
  let salario = parseFloat(prompt("Digite o salario da pessoa."));
  let usuario = { sexo: sexo, salario: salario };
  if (
    (usuario.sexo === "M" || usuario.sexo === "H") &&
    !isNaN(usuario.salario)
  ) {
    usuarios.push(usuario);
  }
  continuar = prompt(
    "Digite '0' para encerrar o cadastramento ou qualquer outra tecla para continuar."
  );
}

const salarioHomens = usuarios.reduce((accumulator, currentValue) => {
  if (currentValue.sexo === "H") {
    return accumulator + currentValue.salario;
  }
  return accumulator;
}, 0);

const salarioMulheres = usuarios.reduce((accumulator, currentValue) => {
  if (currentValue.sexo === "M") {
    return accumulator + currentValue.salario;
  }
  return accumulator;
}, 0);

console.log(usuarios);
console.log(salarioHomens);
console.log(salarioMulheres);