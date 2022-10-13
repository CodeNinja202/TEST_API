const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const usersRouters = require('./api/routes/users');
const codesRoutes = require('./api/routes/code');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/users', usersRouters);
app.use('/code', codesRoutes);


app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error)
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error
    });
});


module.exports = app;