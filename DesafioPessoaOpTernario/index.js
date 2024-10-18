const pessoas = [
  { nome: "ana", idade: 52, sexo: "F" },
  { nome: "maria", idade: 23, sexo: "F" },
  { nome: "joao", idade: 15, sexo: "M" },
];
const cachorro = [
  { raca: "chiuaua", coloracao: 52, sexo: "F" },
  { raca: "são berna", coloracao: 52, sexo: "F" },
  { raca: "vira casaca", coloracao: 52, sexo: "F" },
];

const meninos = [];
const meninas = [];

function filtrosexual(arrPessoas) {
  if (typeof arrPessoas == "object") {
    for (pessoa of arrPessoas) {
      pessoa.sexo == "F" ? meninas.push(pessoa) : meninos.push(pessoa);
    }
  }
}

filtrosexual(pessoas);
filtrosexual(cachorro);

/*  if (pessoa.sexo == "F"){
    meninas.push(pessoa)
  }  else if(pessoa.sexo == "M"){
      meninos.push(pessoa);
  } else {
    console.log("sexo invalido");
  }*/

console.log("_____________meninas____________");
console.log(meninas);
console.log("_____________meninos____________");
console.log(meninos);
