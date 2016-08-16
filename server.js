'use strict'
var express = require('express');
var app = express();

var Estabelecimento = function(id, name, address, location, cnpj){
	this.id = id;
	this.name = name;
	this.address = address;
	this.location = location;
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/estabelecimentos', function (req, res) {
	
	res.append

	let estabelecimentos = [
		new Estabelecimento(1, "Lanchonete do pedro", "Rua Uruguai - 230", [2, 2], "5454654654"),
		new Estabelecimento(2, "Duck Lanches", "Rua Uruguai - 230", [2, 2], "5454654654"),
		new Estabelecimento(3, "Restaurante La Plaza", "Rua Brusque - 230", [2, 2], "5454654654"),
		new Estabelecimento(4, "Richardz Lanchoneitz", "Rua Joca Brandão - 100", [2, 2], "5454654654"),
		new Estabelecimento(5, "Santo Bar", "Rua da Univali - 230", [2, 2], "5454654654"),
		new Estabelecimento(6, "X Único", "Rua Samuel Heusi - 230", [2, 2], "5454654654"),
	];

   	res.send(estabelecimentos);
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})