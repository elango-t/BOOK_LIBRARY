const signUpService = require('../server/userService');

 exports.register = async(req,res) =>{
    try{
        const {username,email,password} = req.body;
        console.log(username,email,password);


        const success= await signUpService.userRegistration(username,email,password);
        console.log("success", success);
        res.json({status:true,message:"successfully registered....!"});
        
    }catch(err){
       res.json({status:false,message:"Email id is already taken"});
    }
}
