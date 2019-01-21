const Sequelize = require('sequelize');
const conn = require('./connection');
const {models,Op} = conn.createConnection();
var store = (albumdata)=>{
    
    console.log(albumdata,'ok')
    try {
        let Album  = models.albums.create({
            name: albumdata.AlbumName,
            description: albumdata.AlbumDescription,
            user_id : albumdata.user_id,
            created_at : Date.now(),
            updated_at : Date.now()
        })
    } catch (error) {
        console.log(error)
    }
}
var retrieve = (user_id)=>{
   return models.albums.findAll({
       where:{
        [Op.and] : [{user_id : user_id}]
       }
   }).then((find)=>{
       return find;
   })
}
module.exports = {
    store,
    retrieve
}