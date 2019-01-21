const joi = require('joi');
const schema = joi.object().keys({
    fullname:joi.string().max(50).required(),
    password:joi.string().min(3).required(),
    email:joi.string().email({ minDomainAtoms: 2 }).required()

})
const CheckValidation = (UserData)=>{
const result = joi.validate({
    fullname:UserData.name,
    password:UserData.password,
    email:UserData.email
},schema);

// console.log(UserData);
return result;
}
module.exports = {schema,CheckValidation}
