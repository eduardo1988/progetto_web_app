//dipendenza di node per fare applicazioni web

const express = require('express'); // framework
var partials   = require('express-partials');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieSession = require('cookie-session');
var cookieParser = require('cookie-parser');
var engine = require('ejs-locals');
var path = require('path');

const app = express();


app.set('views',path.join(__dirname + '/views'));
app.engine('ejs',engine);
//Generatore di Template
app.set('view engine','ejs');
app.use(partials());
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));



//route index
app.get('/',function(req,res){
    res.render('index',{title: 'Althea'});
});

//route user
app.get('/login',function(req,res){
    res.render('login',{title: 'Log-in'});
});

//route admin
app.get('/users',function(req,res){
    res.render('users',{title: 'Users'});
});

//route Prenotazione
app.get('/booking',function(req,res){
    res.render('booking',{title: 'Prenotazione'});
});

app.get('/info',function(req,res){
    res.render('info',{title: 'Info'});
});

//Inizializio il server
var port = 3000;
app.listen(port,function(){
    console.log("Live ar Port 3000");
    
});

