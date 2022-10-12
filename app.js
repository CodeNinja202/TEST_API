const express = require('express');
const app = express();
const usersRouters = require('./api/routes/users')


app.use('/users', usersRouters);

app.use((req, res, next) => {
    res.status(200).json({
        message: "Hello World"
    });
});






module.exports = app;