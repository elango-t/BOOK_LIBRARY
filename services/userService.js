const userModel = require('../models/userModel');

class userService {
    static async userRegistration(username, email, password) {
        try {
            
            if (!username || !email) {
                
               return false;
            }

        
            const emailRegex = /@./;
            if (!emailRegex.test(email)) {
                
                return false;
            }

            if (password.length < 6) {
                return false;
            }

           
            const existingUser = await userModel.findOne({ $or: [{ username }, { email }] });
            if (existingUser) {
               
                return false;
            }

        
            const createUser = new userModel({ username, email, password });

  
            await createUser.save();
            
            return true;
           
        } catch (err) {
            console.error("Error during user registration:", err.message);
           
        }
    }

    static async userLogin(Username, Pass) {
        try {
            let user;
            user = await userModel.find({ username: Username, password: Pass });
            if (!user) {
                user = await userModel.find({ email: Username, password: Pass });
            }
           
            return user;
            
        } catch (err) {
            throw err;
        }
    }
}

module.exports = userService;

