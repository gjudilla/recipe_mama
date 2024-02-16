const router = require('express').Router();
const { User } = require('../../models');

// CREATE new user from sign up 
router.post('/', async (req, res) => {
    try {
        const newUserData = await User.create({
            userName: req.body.userName,
            userPassword: req.body.userPassword,
        });

        // set up the session loggedIn status set to true
        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json(newUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});