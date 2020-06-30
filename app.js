require('dotenv').config();

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const routes = require('./routes/index.js');

const app = express();
const router = express.Router();

const environment = process.env.NODE_ENV;
const port = environment === 'production' ? 3000 : 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(logger('dev'));

if (environment === 'production') {
    require('./db/db')
    app.use(express.static(path.join(__dirname, 'client', 'build')))

    app.use('/api/v1', routes(router))
    app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')))
} else {
    require('./db/dev_db')
    app.use('/api/v1', routes(router))
}

app.listen(port, () => {
    console.log(`Server now listening at ${port}`);
});

module.exports = app;
