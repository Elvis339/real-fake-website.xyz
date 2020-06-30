const path = require('path')

module.exports = {
    global: {
        root_path: path.dirname(require.main.filename)
    },
    saltingRounds: 10
}