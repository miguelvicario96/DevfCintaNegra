const jwt = require('jsonwebtoken');

// Cliente -----> Middleware -----> Backend(Controller)

module.exports = {
    validateToken: (req, res, next) => {
        try {
            const { authorization } = req.headers
            if (!authorization) {
                res.status(403).send({error: 'Necesitas Un Token Para Continuar'});
            } else {
                const token = authorization.split(" ")[1]; //Bearer Token
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                req.decoded = decoded;
                next()
            }
        } catch (error) {
            res.status(403).send(error)
        }
    }
}