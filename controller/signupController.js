const signUpService = require('../services/userService');

 exports.register = async(req,res) =>{
    try{
        const {username,email,password} = req.body;
       
        const success= await signUpService.userRegistration(username,email,password);
       
       
        res.send(success);
        
    }catch(err){
       res.json({status:false,message:"Email id is already taken"});
    }
}
