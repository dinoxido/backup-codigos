// OBJETOS SÃO ESTRUTURAS COMPLEXAS EM EM JAVASCRIPT
// SÃO ORGANIZADOS POR CHAVES-VALOR (key-value)
// CONTÉM ATRIBUTOS E MÉTHODOS
//OBJETOS LITERAIS

const PCH = {
  cor: "PRETO",
  ORGÃO: "CABEÇA",  
  TAMANHO: "MÉDIO",
  PESO: 3,
  ORIGEM :['BRASIL', 'USA', 'CHINA'], 
    COMPRAR: function(){
    return 'pch comprada'
   //   console.log('COMPREI UM PCH')
    },
};

console.log(PCH, '\n')

console.log(Object.keys(PCH),"\n" )
console.log(Object.values(PCH))

for (let i  of PCH){
  console.log()
}