// declarção de func
function dizOla(){
  console.log("")
}
//invocação de func
dizOla()

function dizTchau(nome){
  console.log("ola," + nome )
}

dizTchau("vandal")

function soma(a, b){
  return a + b
}

let salario = 2500

function novoSal() {
  return "R$ " + salario + ",00"
}

console.log(novoSal())
console.log(soma(2, 3))

// funções do tipo arrow (função anônima)

const imprimemeutime = () => {
  return("sem pau no cu FC");
}

console.log(imprimemeutime())
