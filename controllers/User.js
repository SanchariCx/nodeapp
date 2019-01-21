const express = require('express');
const UserRegister = require('./UserRegister');
const UserRegisterValidation = require('../validation/UserRegisterValidation');
const UserLoginValidation = require('../validation/UserLoginValidation');
const User = require('../user');
let session  = require('express-session');
const hbs = require('hbs');

let register = (req,res)=>{
    const result =   UserRegisterValidation.CheckValidation(req.body);
    if(result.error === null)
    {
        User.Store(req.body);
        return;     
    }
   }

let login = (req,res)=>{
    if(req.method === 'GET')
    {
        res.render('login.hbs');
    
    }
    else if(req.method === 'POST')
    {
        loginValidate = UserLoginValidation.CheckValidation(req.body);
        if(loginValidate.error === null)
        {
         var ValidatedUser =   User.retrive(req.body);
         
          ValidatedUser.then((user)=>{

            
            if(user===null)
            {
                console.log('wrong credentials');
            }
            else
            {   req.session.UserId = user.id;
                res.redirect('/home');
            }
             
          }).catch((err)=>{
              console.log(err)
          })

        }
    }        
}
let home = (req,res)=>{
    console.log(req.session.UserId);
    hbs.registerHelper('UserId',()=>{
        return req.session.UserId;
    });
    res.render('home.hbs');
}
    
    
module.exports = {
    register,
    login,
     home
}