//importando modulo com require
const http = require("http");

const porta = 6666;

const servidor = http.createServer((req, res) => {
  console.log(req.url, req.method);
});
servidor.listen(porta, () => {
  console.log("Servidor rodando na porta ${porta}");
});
