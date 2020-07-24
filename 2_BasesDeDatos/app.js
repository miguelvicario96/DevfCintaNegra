const express = require('express');
const app = express();

//Si no pongo el archivo, automaticamente JS ira a buscar un archivo llamado index.js
const { User } = require('./models')

//Levanta el puerto que este activo, sino activa el puerto 3000
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.status(200).send({message: 'Server On'});
})

//CRUD

//CREATE
app.post('/api/v1/users', async (req, res) => {
    const newUser = new User(req.body)

    try {
        //save() es una función asíncrona y Promesa
        const user = await newUser.save();
        res.status(201).send(user);
    } catch (error) {
        console.error(error);
    }
})

//READ
app.get('/api/v1/users', async (req, res) => {
    try {
        //Trae los que tengas isActive: true
        const users = await User.find({isActive:true});
        res.status(200).send(users);
    } catch (error) {
        console.error(error);
    }
})

//READ ONE USER
app.get('/api/v1/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).send(user);
    } catch (error) {
        console.error(error);
    }
})

//PUT
app.put('/api/v1/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.status(200).send(user);
    } catch (error) {
        console.error(error);
    }
})

//PATCH
app.patch('/api/v1/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, {$set:{email:req.body.email}}, {new:true});
        res.status(200).send(user);
    } catch (error) {
        console.error(error);
    }
})

//DELETE
app.delete('/api/v1/users/:id', async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id, {$set:{isActive:false}}, {new:true});
        res.status(200).send({message: 'Usuario Eliminado'});
    } catch (error) {
        console.error(error);
    }
})


app.listen(PORT, (error) => !error ? console.info(`Server on Port: ${PORT}`) : console.error(error));