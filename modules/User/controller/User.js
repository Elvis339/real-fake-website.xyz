const User = require('../model/UserModel');

const addNewUser = async (req, res) => {
    try {
        const { body } = req;
        const user = new User(body);

        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token });
    } catch (error) {
        console.log(error);
        res.status(406).send({
            message: 'Wrong inputs!',
            status: 406,
        });
    };
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findByCredentials(email, password);
        const token = await user.generateAuthToken();
        res.send({ token });
    } catch (error) {
        res.status(403).send({
            message: 'Unable to login.',
            status: 403,
        });
    };
};

const logOut = async (req, res) => {
    try {
        const { _id } = req.user
        const user = await User.findById({ _id })
        if (!user) throw new Error('No user found, something reeeaaallly went wrong.');
        user.tokens = []
        await user.save()
        res.status(200).send()
    } catch (error) {
        res.status(500).send({
            message: 'Contact admin!',
            status: 403,
        });
    };
};

const validate = async (req, res) => {
    try {
        const { email, name } = req.user
        res.status(200).send({ email, name })
    } catch (error) {
        res.status(500).send({
            message: "Server error",
            status: 500,
        });
    };
};

module.exports = {
    addNewUser,
    login,
    logOut,
    validate,
};