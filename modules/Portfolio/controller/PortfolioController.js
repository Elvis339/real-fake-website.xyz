const Portfolio = require('../model/PortfolioModel');

const addNewArticle = async (req, res) => {
    try {
        const { body, user } = req;
        const { type } = body;
        if (type !== 'Portfolio') throw new Error();

        const portfolios = new Portfolio({
            ...body,
            created_by: user.email,
        });
        portfolios.db.db
            .admin()
            .command({ setParameter: 1, failIndexKeyTooLong: false });
        await portfolios.save();
        res.status(201).send(portfolios);
    } catch (error) {
        console.log(error);
        res.status(406).send({
            message: "Not acceptable",
            status: 406,
        });
    }
};

const getArticles = async (req, res) => {
    try {
        const { id } = req.query;
        let portfolios = null;

        if (id) {
            const title = id.replace(/\-/g, ' ');
            portfolios = await Portfolio.findOne({ title });
        } else {
            portfolios = await Portfolio.find({ type: 'Portfolio' }).sort({ start_date: -1 });
        }

        res.status(200).send(portfolios);
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Somethings wrong :(",
            status: 500,
        });
    }
};

const editArticle = async (req, res) => {
    try {
        const updates = Object.keys(req.body);
        const allowedUpdates = [
            "_id",
            "description",
            "title",
            "dev_stack",
            "start_date",
            "end_date"
        ];

        const isValidOperation = updates.every(update => allowedUpdates.includes(update));

        if (!isValidOperation) {
            return res.status(400).send({
                error: 'Invalid update!',
            });
        }

        const { _id } = req.body;
        const article = await Portfolio.findOne({ _id });
        updates.filter(val => val !== "_id").forEach(update => article[update] = req.body[update]);
        await article.save();
        res.status(200).send(article);
    } catch (error) {
        res.status(405).send({
            message: "Request sent is bad :/",
            status: 405,
        });
    }
};

module.exports = {
    addNewArticle,
    getArticles,
    editArticle,
}
