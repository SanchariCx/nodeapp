const joi = require('joi');
const schema = joi.object().keys({
    AlbumName:joi.required(),
    AlbumDescription:joi.string(),

})
const CheckAlbum = (AlbumName,AlbumDescription)=>{
    const result  = joi.validate({
        AlbumName:AlbumName,
        AlbumDescription:AlbumDescription
    },schema)
    return result;
}
module.exports = {
    CheckAlbum,
    schema
}
