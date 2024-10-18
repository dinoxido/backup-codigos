// criar pasta com nodejs

const fs = require('fs');
const path = require('path');

// criando com caminhos estatisticos

function pastaEstatica(nomePasta){
  fs.mkdir(nomePasta, function(err){
    console.log('erro ao criar pasta')
    console.log(err)
  })
}
function pastaDinamica(nomePasta){
  if(!fs.existsSync(nomePasta)){
    if(!fs.existsSync(path.join(__dirname, nomePasta))){
      fs.mkdirSync(path.join(__dirname, nomePasta))
      console.log("criou pasta")
      return true
    } else {
      console.log(`A pasta ${nomePasta} já existe`)
      return false
    }
    
  }
}

// criando com caminhos dinamicos

module.exports = {pastaEstatica}
module.exports = {pastaDinamica}