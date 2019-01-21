const express = require('express');
const app = express();
const hbs = require('hbs');
const validate = require('./../validation/AlbumCreationValidation');
const album = require('./../album');
let session  = require('express-session');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
let create = (req,res)=>{
    var Albumvalidation = validate.CheckAlbum(req.body.AlbumName,req.body.Albumdescription);
    console.log(Albumvalidation);
    if(Albumvalidation.error === null)
    {   
        album.store(req.body);
        res.send('ok')
    }
    // console.log(Albumvalidation.error.message);
 }
 let fetch = (req,res)=>{
     let user_id  = req.body.user_id;
    let fetchedAlbums = album.retrieve(user_id);
    // res.send(fetchedAlbums);
    // console.log(fetchedAlbums);
    fetchedAlbums.then((album_details)=>{          
         res.send(album_details)
      }).catch((err)=>{
          console.log(err)
      })
 }
module.exports = {
    create,
    fetch
}