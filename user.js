const Sequelize = require('sequelize');
const conn = require('./connection');
// import UserRegisterValidation from './validation/UserRegisterValidation'
const {models,Op} = conn.createConnection();
var Store = (data)=>{
 
     try {
        let user = models.users.create({
            name : data.name,
            email: data.email,
            password: data.password,
            created_at: Date.now(),
            updated_at: Date.now()
        })
         
     } catch (error) {
         console.log(error)
     }   
 
}
var retrive = (data)=>{
 return models.users.findOne({
        where:
        {
            [Op.and] : [{email : data.email},{password : data.password}]
        }
        })
        .then(function (find) {
             //console.log(find);
            return find;
            
     }).catch(function(error){
         console.log(error);
            
     });   
}
module.exports = {
    Store,
    retrive,
}