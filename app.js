const express = require('express');
const hbs = require('hbs');
const app = express();
var url = require('url');
var path = require('path')
let session  = require('express-session');
const bodyParser = require('body-parser');
const User = require('./controllers/User');
const Album = require('./controllers/Album');
const Image = require('./controllers/Image');
var multer  = require('multer')
var time = Date.now();
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null,time + path.extname(file.originalname))
    }
  })
var upload = multer({ storage: storage });
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    secret: 'sfeswf',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge:null}
  }))
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');
app.get('/',(req,res)=>{
res.render('registration.hbs');    
})
app.post('/register',User.register)
app.all('/login',User.login)
app.post('/createAlbum',Album.create)
app.post('/fetchalbums',Album.fetch)
app.get('/ViewAlbum/:album_id',Image.upload)
// app.post('/ViewAlbum/imageUpload',upload.single('album-image'),(req,res)=>{
//     Image.Store(time,req,res)
// })
app.post('/viewAlbum/imageUpload',upload.single('album-image'),(req,res)=>{
    res.send('okk');
})
app.get('/home',User.home)
app.listen(3001,()=>{
    console.log('server started on port 3001');
})








