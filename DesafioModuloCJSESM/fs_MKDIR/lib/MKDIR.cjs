//função que se gera uma pasta
const fs = require('fs');
const path = require('path');
//criar uma função sem path

function criarPastaEstatica(pasta) {
  fs.mkdir(pasta, function(err) {
    if (err) {
      console.log("Erro ao criar pasta");
      console.log(err);
    } else {
      console.log('Pasta criada com sucesso!');
    }
  })
}
function criarPastaDinamica(pasta) {
  if (!fs.existsSync(path.join__dirname, pasta)) {
    fs.mkdirSync(path.join(__dirname, pasta))
  } else {
    console.log(`Não foi possivel criar a pasta ${pasta}`);
  }
}
module.exports = { criarPastaEstatica, criarPastaDinamica }
