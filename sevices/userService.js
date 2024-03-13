const userModel = require('../models/userModel');

class userService {
    static async userRegistration(username, email, password) {
        try {
            console.log("userservice", username, email, password);
            const createUser = new userModel({ username: username, email: email, password: password });
            console.log("qqqqq");
            await createUser.save();
            console.log("createUser", createUser);
            return true;
        } catch (err) {
            console.log("errr", err);
            throw err;
        }
    }

static async userLogin(Username, Pass) {
    try {
        let user;
        user = await userModel.findOne({ username: Username, password: Pass });
        if(!user){
            user=await userModel.findOne({email:Username,password:Pass});
        }
        return user;
    } catch (err) {
        throw err;
    }
}
}

module.exports = userService;
