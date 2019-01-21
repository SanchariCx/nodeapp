var sequelize = require('sequelize');
var conn = require('./connection');
const {models,Op }=  conn.createConnection()
var create = (data)=>{
    console.log(data)
}
var retrieve = ()=>{

}
module.exports = {
    create
}

