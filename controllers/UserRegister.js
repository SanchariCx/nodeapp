const UserRegisterValidation = require('../validation/UserRegisterValidation');
const User = require('../user');

// let User;
// export default  User = (req,res)=>{
//     user.Store(req.body);
//     res.end();
//    }
var CreateUser = (UserData)=>{
 const result =   UserRegisterValidation.CheckValidation(UserData);
 if(result.error === null)
 {
     User.Store(UserData);
     return;     
 }
 console.log(result.error.message);
}
var log
module.exports = {
    CreateUser,
}