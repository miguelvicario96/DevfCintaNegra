const express = require('express');
const { urlencoded } = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const router = require('../routes');
const fileUpload = require('express-fileupload')

app.use(express.json());
app.use(urlencoded({extended:true}));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));
app.use('/api/v1/', router);

module.exports = {
    app,
    PORT
};