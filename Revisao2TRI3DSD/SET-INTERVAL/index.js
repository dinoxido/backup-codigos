//console.log("TESTE...QUEM LEU É HETERO")
let salario = 1000;
const nome = "josé";
const sobrenome = "maria";

function imprimeDados() {
  const pessoa = `Nome ${nome} ${sobrenome} `;
  const alario = `R$ ${salario}`;
  console.log(pessoa);
  console.log("ganha: ", alario);
}
setInterval(imprimeDados, 1000);

// setInterval(function(){
//   console.clear()
//   console.log("Salário: R$", salario);
//   salario += Math.random(1, 100);
// }, 5000);
