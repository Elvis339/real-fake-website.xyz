const User = require('../../../models/UserModel');

module.exports = {
    addNewUser: async (req, res) => {
        const user = new User(req.body);

        try {
            await user.save()
            const token = await user.generateAuthToken()
            res.status(201).send({ user, token })
        } catch (error) {
            res.status(406).send({
                err: error.toString(),
                message: "Not acceptable",
                status: 406,
            })
        }
    },

    logOut: async (req, res) => {
        try {
            const { _id } = req.user
            const user = await User.findById({ _id })
            if (!user) throw new Error('No user found, something reeeaaallly went wrong.');
            user.tokens = []
            await user.save()
            res.status(200).send()
        } catch (error) {
            res.status(500).send({
                message: 'Contact support!',
                status: 403,
                err: error.toString()
            })
        }
    },

    login: async (req, res) => {
        const { email, password } = req.body
        try {
            const user = await User.findByCredentials(email, password)
            const token = await user.generateAuthToken()
            res.send({ token })
        } catch (error) {
            res.status(403).send({
                message: 'Unable to login.',
                status: 403,
                err: error.toString()
            })
        }
    },

    validate: async (req, res) => {
        try {
            const { email, name } = req.user
            res.status(200).send({ email, name })
        } catch (error) {
            res.status(500).send({
                message: "Server error",
                err: error.toString(),
                status: 500,
            })
        }
    },
}