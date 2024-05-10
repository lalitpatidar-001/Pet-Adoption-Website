const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { ObjectId } = require('mongodb');

// create new user
const registeration = async (req, res) => {
        const user = req.body;
        try {
                const userExists = await User.findOne({ username: req.body.username });
                if (userExists) return res.status(401).json("username already exists, choose new ");
                const emailExists = await User.findOne({ email: req.body.email });
                if (emailExists) return res.status(401).json("email already exists");

                const salt = bcrypt.genSaltSync(10);
                if (req.body.password) user.password = bcrypt.hashSync(req.body.password, salt);

                const newUser = new User(user);
                const savedUser = await newUser.save();
                const { password, ...others } = savedUser;
                return res.status(201).json(others._doc)

        } catch (error) {
                res.status(500).json("somthing went wrong on server");

                console.log(error)
        }
}


const login = async (req, res) => {
        const user = req.body;
        try {
                const userExists = await User.findOne({ username: req.body.username });
                if (!userExists) return res.status(404).json({ msg: "wrong username" });

                bcrypt.compare(req.body.password, userExists.password, function (err, resp) {
                        const { password, ...others } = userExists;
                        const sendData = others._doc;
                        if (resp === true) return res.status(200).json({ msg: "authentic user", sendData });
                        else {
                                return res.status(401).json({ msg: "wrong password" })
                        }
                });

        } catch (error) {
                res.status(500).json("something went wrong on server");
                console.log("error ", error);
        }
}



module.exports =
{
        registeration,
        login,
}