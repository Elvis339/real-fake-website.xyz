const
    mongoose = require('mongoose'),
    developmentConnUri = process.env.MONGO_DEV_CONN_URL,
    databaseOptions = {
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