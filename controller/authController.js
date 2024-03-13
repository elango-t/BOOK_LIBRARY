const userService = require('../server/userService');

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
