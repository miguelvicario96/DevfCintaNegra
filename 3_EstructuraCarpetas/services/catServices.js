const Cat = require('../models/Cat');

module.exports = {
    create: (body) => {
        const newCat = new Cat(body);
        return newCat.save();
    },
    getCats: () => {
        const cats = Cat.find({isActive:true});
        return cats;
    },
    getCat: (id) => {
        const cat = Cat.findById(id);
        return cat;
    },
    updateCat: (cat, body) => {
        Object.assign(cat, body);
        
        //Cat es el objeto que obtuvimos y ya tiene un metodo save(), es por eso que no debemos buscar su id o algo por el estilo
        return cat.save();
    }
}