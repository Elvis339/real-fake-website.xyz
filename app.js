require('dotenv').config(); // Sets up dotenv as soon as our application starts
const
    express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    routes = require('./routes/index.js'),
    stage = require('./config').development;

const app = express();
const router = express.Router();

const environment = process.env.NODE_ENV;
const port = stage.port

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(logger('dev'));


// ROUTE
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
