// LOOPS são laços/ciclos de repetição infinita
// for, in, for, for of,  foreach, while, do while
// loop: inicialização, condição de parada, incremento
const pokedex = ["torchic", "treecko", "mudkip", "turtwig", "chimchar", "piplup"]
const valose = ["shika", "nokonoko", "koshi", "tan tan"]

const pokemonList = [
  {nome:"torchic",tipo:"fogo"},
  {nome:"treecko",tipo:"planta"},
  {nome:"mudkip",tipo:"água"},
  {nome:"turtwig",tipo:"planta"}
]

for (let poke of pokemonList){
  console.log(`pokemonList.nome, pokemonList.tipo`)
} 

// for (let poke = 0; poke < pokemonList.length; poke++) {
//   console.log(pokemonList[poke])
// }

// for (let i in valose) {
//   console.log(i)
// }
// for (let i of valose) {
//   console.log(i)
// }



//https://pythontutor.com/
