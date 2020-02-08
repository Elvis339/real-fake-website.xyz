const path = require('path')

module.exports = {
    global: {
        root_path: path.dirname(require.main.filename)
    },
    development: {
        environment: "development",
        port: process.env.PORT || 5000,
        saltingRounds: 10
    }
}