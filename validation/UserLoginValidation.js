const joi = require('joi');
const schema = joi.object().keys({
    password:joi.string().min(3).required(),
    email:joi.string().email({ minDomainAtoms: 2 }).required()

})
const CheckValidation = (UserData)=>{
const result = joi.validate({
    password:UserData.password,
    email:UserData.email
},schema);
return result;
}
module.exports = {schema,CheckValidation}