const cloudinary = require('cloudinary').v2;
const JWT = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret
});

module.exports = {
    createToken: (payload) => {
        const token = JWT.sign(payload, JWT_SECRET, {expiresIn: '30d'}); //json expira en 30 días
        return token
    },
    uploadFile: (tempFile) => {
        return new Promise((resolve, reject) => {
            cloudinary.uploader.upload(tempFile, (error, result) => {
                error ? reject(error) : resolve(result);
            });
        });
    }
}