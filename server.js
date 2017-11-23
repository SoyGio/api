var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

var path = require('path');

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', function(req, res) {
  res.send('Hemos recibido su petición cambiada');
});

app.get('/clientes/:idcliente', function (req, res) {
  res.send('Aquí tiene al cliente número ' + req.params.idcliente);
})
