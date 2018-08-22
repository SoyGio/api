var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

var requestjson = require('request-json');
var bodyParser = require('body-parser');

var urlMovs = "https://api.mlab.com/api/1/databases/bdbanca2/collections/movimientos?apiKey=AIle8Dm6ZzZztpvwolRU4AX2PH9-irFh";
var clienteMLab = requestjson.createClient(urlMovs);
var path = require('path');

app.listen(port);
app.use(bodyParser.json());

app.get("/", function(req,res){
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/movimientos", function(req, res){
  clienteMLab.get('', function(err, resM, body) {
    if (err){
      console.log(body);
    }else{
      res.send(body);
    }
  });
});

app.post("/movimientos", function(req, res){
  clienteMLab.headers['Content-Type'] = 'application/json';
  clienteMLab.post('', req.body, function(err, resM, body) {
    if (err){
      console.log(body);
    }else{
      res.send(body);
    }
  });
});

app.get("/post", function(req, res){
  clienteMLab.get('', function(err, resM, body) {
    if (err){
      console.log(body);
    }else{
      res.send(body);
    }
  });
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
