<<<<<<< HEAD
const userService = require('../sevices/userService');
=======
const userService = require('../services/userService');
>>>>>>> 25dc21f44baa5986bd69fbef6c77a012c3afdadd

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        
        const user = await userService.userLogin(username, password);
        if (user) {

            res.json({ status: true, message: "Login successful" });
        } else {
            res.status(401).json({ status: false, message: "Invalid credentials" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: false, message: "Server error" });
    }
};
