var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

var path = require('path');

app.listen(port);

app.get("/", function(req,res){
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/clientes/:id", function(req, res){
	res.send("Se recibió el cliente número: " + req.params.id);
})

app.post("/", function(req, res){
	res.send("Hemos recibido tu petición POST");
});

app.put("/",function(req,res){
	res.send("Se han actualizado los datos");
});

app.delete("/",function(req,res){
	res.send("Se ha eliminado el dato");
});


console.log('todo list RESTful API server started on: ' + port);

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.get("/clientes/:idcliente", function(req, res) {
  res.send("Aquí tiene al cliente número: "+req.params.idcliente);
})

app.post("/", function(req, res) {
  res.send("Hemos recibido su petición actualizada");
})

app.put("/", function(req, res) {
  res.send("Hemos recibido su petición de modificación");
})

app.delete("/", function(req, res) {
  res.send("Hemos recibido su petición de borrado");
})
