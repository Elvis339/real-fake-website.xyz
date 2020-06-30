const mongoose = require('mongoose');
const developmentConnUri = process.env.MONGO_DEV_CONN_URL || 'mongodb://127.0.0.1:27017/website'
const databaseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}


mongoose.connect(developmentConnUri, databaseOptions, (err) => {
    if (!err) {
        return console.log(`Connection to the development database established.`)
    }
    throw new Error(`Error connecting to the development database! ${err.toString()}`)
});