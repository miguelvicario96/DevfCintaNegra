const express = require('express');
const app = express();
const { Articulo, Ticket } = require('./models')
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//CRUD Articulo

//Create
app.post('/api/v1/articles', async (req, res) => {
    const newArticle = new Articulo(req.body);

    try {
        const article = await newArticle.save();
        res.status(201).send(article)
    } catch (error) {
        console.error(error);
    }
});

//Read
app.get('/api/v1/articles', async (req, res) => {

    try {
        const articles = await Articulo.find({isActive:true});
        res.status(200).send(articles);
    } catch (error) {
        console.error(error);
    }
});

//Update
app.put('/api/v1/articles/:articleid', async (req, res) => {

    try {
        const articles = await Articulo.findByIdAndUpdate(req.params.articleid, req.body, {new:true});
        res.status(200).send(articles);
    } catch (error) {
        console.error(error);
    }
});

//Delete
app.delete('/api/v1/articles/:articleid', async (req, res) => {

    try {
        await Articulo.findByIdAndUpdate(req.params.articleid, {$set:{isActive:false}}, {new:true});
        res.status(200).send({message: 'Articulo Eliminado'});
    } catch (error) {
        console.error(error);
    }
})


//CRUD Ticket

//Create
app.post('/api/v1/tickets', async (req, res) => {
    const newTicket = new Ticket(req.body);

    try {
        const ticket = await newTicket.save();
        res.status(201).send(ticket)
    } catch (error) {
        console.error(error);
    }
});

//Read
app.get('/api/v1/tickets', async (req, res) => {

    try {
        const tickets = await Ticket.find({isActive:true});
        res.status(200).send(tickets);
    } catch (error) {
        console.error(error);
    }
});

//Update
app.put('/api/v1/tickets/:ticketid', async (req, res) => {

    try {
        const tickets = await Ticket.findByIdAndUpdate(req.params.ticketid, req.body, {new:true});
        res.status(200).send(tickets);
    } catch (error) {
        console.error(error);
    }
});

//Delete
app.delete('/api/v1/tickets/:ticketid', async (req, res) => {

    try {
        await Ticket.findByIdAndUpdate(req.params.ticketid, {$set:{isActive:false}}, {new:true});
        res.status(200).send({message: 'Ticket Eliminado'});
    } catch (error) {
        console.error(error);
    }
})

app.listen(PORT, (error) => !error ? console.info(`Server on Port: ${PORT}`) : console.error(error));