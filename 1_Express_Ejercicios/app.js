const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


//Ejercicio 1
app.get('/api/suma', function(request, response) {
    const num1 = +request.query.num1;
    const num2 = parseInt(request.query.num2);

    const suma = num1 + num2;

    response.status(200).send({resultado: suma})
})


//Ejercicio 2
app.get('/api/usuario/:nombre', function(request, response) {
    response.status(200).send({usuario: request.params.nombre})
})


app.listen(3000, function(error) {
    if (!error) {
        console.info('Server On Port 3000')
    } else {
        console.info(error)
    }
})