const userServices = require('../services/userServices');
const User = require('../models/User');
const Utils = require('../utils')

module.exports = {
    create: async (req, res) => {
        try {
            const user = await userServices.create(req.body);
            res.status(201).send({user});
        } catch (error) {
            res.status(409).send({error});
        }
    },
    getUsers: async (req, res) => {
        try {
            const users = await userServices.getUsers();
            res.status(200).send({users});
        } catch (error) {
            res.status(409).send({error});
        }
    },
    getUser: async (req, res) => {
        try {
            const user = await userServices.getUser(req.params.id);
            res.status(200).send({user});
        } catch (error) {
            res.status(409).send({error});
        }
    },
    updateUser: async (req, res) => {
        if (req.files) {
            try {
                const upload = await Utils.uploadFile(req.files.photo.tempFilePath);
                console.log(upload);
    
                if (upload) {
                    req.body.photo = upload.url;
                } 
            } catch (error) {
                console.log(error);
            }
        }

        try {
            const user = await userServices.getUser(req.params.id);
            const updatedUser = await userServices.updateUser(user, req.body);
            res.status(200).send({updatedUser});
        } catch (error) {
            res.status(409).send({error});
        }
    },
    deleteUser: async (req, res) => {
        try {
            const user = await userServices.getUser(req.params.id);
            await userServices.updateUser(user, {isActive:false});
            res.status(200).send({message: 'Usuario Eliminado'});
        } catch (error) {
            res.status(409).send({error});
        }
    },
    login: async (req, res) => {
        try {
            const user = await userServices.findUserByEmail(req.body.email);

            if (!user) {
                res.status(404).send({message: 'User Not Found'});
            } else {
                const isMatch = userServices.comparePasswords(req.body.password, user.password);

                if (!isMatch) {
                    res.status(400).send({message: 'Invalid Credentials'});
                } else {
                    res.status(200).send({user});
                }
            }
        } catch (error) {
            res.status(409).send({error});
        }
    }
}