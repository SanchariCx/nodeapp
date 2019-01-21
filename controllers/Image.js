var path = require('path')
var fs = require("fs");
var image_model = require('./../image')
let upload = (req,res)=>{
    var album_id = req.params.album_id
    res.render('gallery.hbs')
}
let Store = (time,req,res)=>{
    var originalname = req.file.originalname;
    var mimetype = req.file.mimetype;
    var caption = req.body.caption;
    var view_status = req.body.view_status;
    // console.log(originalname,mimetype,caption,view_status,time);
    
    image_model.create({
        "original_name":originalname,
        "mime":mimetype,
        "caption":caption,
        "view_status":view_status,
        "image_name":time,
        "ext":req.file.path,
        "size":req.file.size
    })
    res.end();
   
}
module.exports = {
    upload,
    Store
}
