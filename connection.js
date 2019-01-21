var Sequalize = require('sequelize');
var createConnection = ()=>{
    var sequalize = new Sequalize('gallery-db','root','codelogicx101',{
        host:'localhost',
        dialect:'mysql',
        port:3306,
        logging: false,
        freezeTableName: true,
        operatorsAliases: false
    });
    var models = require('sequelize-auto-import')( sequalize, './models');
    // models.users.hasMany(models.albums,{foreignKey: 'user_id', sourceKey: 'id'})
    var Op =  Sequalize.Op
    return {
        sequalize,
        models,
        Op
    };
}
module.exports = {
createConnection
};