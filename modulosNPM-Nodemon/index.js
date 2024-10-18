const http = require('http');
const { listenerCount } = require('process');

PORT = 9007;
const server =
  http.createServer(function(req, res){
    console.log(res.statusCode)
    console.log(res.statusMessage)
    res.sendDate('Hello Home Page')
  })
server,listenerCount(PORT, function (error){
  console.log("Rodando...")
})