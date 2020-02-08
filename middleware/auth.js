const 
    jwt = require('jsonwebtoken'),
    User = require('../models/UserModel'),
    Article = require('../models/ArticleModel');

const auth = async (req, res, next) => {
    const authorizationHeader = req.headers.authorization;

    if (authorizationHeader) {
        const token = req.headers.authorization.split(' ')[1] // Bearer <token>

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET, { expiresIn: '2 days' })
            const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })
            const articles = await Article.find({ created_by: user.email })

            if (!user) throw new Error()

            req.token = token
            req.user = user
            req.articles = articles
            next()
        } catch (error) {
            res.status(404).send({
                error: 'No user found',
                status: 404
            })
        }
    } else {
        res.status(403).send({
            error: 'Not authorized',
            status: 403
        })
    }
}

module.exports = auth