//Backend recibe requests y envia respuestas

const express = require('express'); //Llamamos express
const app = express(); //Inicializamos express

//Estamos utilizando un middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Creamos nuestro primer endpoint escuchando la ruta inicial "/"
app.get('/', function (request, response) {
    response.send('Hello World');
})

app.post('/users', function(request, response) {
    response.status(201).send(request.body);
})

app.put('/users', function(request, response) {
    response.status(200).send(request.body);
})

app.patch('/users', function(request, response) {
    response.status(200).send(request.body);
})

app.delete('/users', function(request, response) {
    response.status(200).send(request.body);
})

//Queries
app.get('/dogs', function(request, response) {
    response.send(request.query);
})

//Parametros
app.get('/dogs/:id', function(request, response) {
    response.send(request.params);
})

 
//Levantamos el servidos
app.listen(3000, function(error) {
    if (!error) {
        console.info('Server On Port 3000');
    } else {
        console.info(error);
    }
})