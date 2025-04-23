const userService = require('../services/userService');


exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        
        const user = await userService.userLogin(username, password);
        console.log(user.length);
        if (user.length==0) {

            res.json({ status: true, message: "Login  successful" });
        } else {
            res.json({ status: false, message: "Invalid credentials" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: false, message: "Server error" });
    }
};
