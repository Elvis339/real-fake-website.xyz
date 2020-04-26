const Article = require('../../../models/ArticleModel');

module.exports = {
    addNewArticle: async (req, res) => {
        const article = new Article(req.body);
        article.db.db
            .admin()
            .command({ setParameter: 1, failIndexKeyTooLong: false });
        const { type } = req.body;
        try {
            const about = await Article.findOne({ type })
            if (about === null) {
                await article.save();
            } else if (about.type == "About") {
                throw new Error("Article exists!");
            };
            await article.save();
            res.status(201).send(article);
        } catch (error) {
            res.status(406).send({
                err: error.toString(),
                message: "Not acceptable",
                status: 406,
            });
        };
    },

    getArticles: async (req, res) => {
        try {
            const article = await Article.find({ type: "About" })
            res.status(200).send({ article })
        } catch (error) {
            res.status(500).send({
                message: "Somethings wrong :(",
                status: 500,
                err: error.toString()
            })
        }
    },

    getPortfolios: async (req, res) => {
        try {
            let portfolios = null;
            const { id } = req.query

            if (id) {
                const title = id.replace(/\-/g, ' ');
                console.log(title)
                portfolios = await Article.findOne({ title })
            } else {
                portfolios = await Article.find({ type: "Portfolio" }).sort({ createdAt: 'asc' });
            }
            res.status(200).send(portfolios)
        } catch (error) {
            res.status(500).send({
                message: "Portfolios not found",
                status: 404,
                err: error.toString()
            })
        }
    },

    editArticle: async (req, res) => {
        const updates = Object.keys(req.body),
            allowedUpdates = [
                "_id",
                "description",
                "title",
                "dev_stack",
                "date_started",
                "date_ended",
                "created_by"
            ],
            isValidOperation = updates.every(update => allowedUpdates.includes(update));

        if (!isValidOperation) {
            return res.status(400).send({
                error: 'Invalid updates.'
            })
        }

        const { _id } = req.body
        try {
            const article = await Article.findOne({ _id })
            updates.filter(val => val !== "_id").forEach(update => article[update] = req.body[update])
            await article.save()
            res.status(200).send(article)
        } catch (error) {
            res.status(405).send({
                err: error.toString(),
                message: "Request sent is bad :/",
                status: 405
            })
        }
    }
}