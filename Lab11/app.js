const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

//Middleware
app.use((request, response, next) => {
    next(); 
});

const lab11Routes = require('./routes/lab11.routes');
app.use('/lab11',lab11Routes);

const dinRoutes = require('./routes/din.routes');
app.use('/din',dinRoutes);

app.use((request, response, next) => {
    response.status(404).send('<h1>Error 404 - Page not found</h1>');
});

app.listen(3000);