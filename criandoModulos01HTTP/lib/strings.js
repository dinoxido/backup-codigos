const nome = 'José';

function Ola(){
  return `Olá ${nome}`;
}
// expotação inline
export function CAlta(text) {
  return `${text.toUpperCase()}`;
}

//exportação default (export default)

function CNormal(text) {
  return `${text.toLowerCase()}`;
};

export default CNormal;

//exportação normal multipla

export{Ola, nome}
