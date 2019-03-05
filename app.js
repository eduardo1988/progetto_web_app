//dipendenza di node per fare applicazioni web
var fs = require('fs');
const express = require('express'); // framework
var partials   = require('express-partials');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieSession = require('cookie-session');
var cookieParser = require('cookie-parser');
var engine = require('ejs-locals');
var path = require('path');

var config = JSON.parse(fs.readFileSync("config.json"));  //Per lettura config.json

// importiamo il modulo nodemailer per inviare una email di contatto
var nodemailer = require('nodemailer');

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

//route signup
app.get('/Signup',function(req,res){
    res.render('Signup',{title: 'Sign-up'});
});

//route admin
app.get('/users',function(req,res){
    res.render('users',{title: 'Users'});
});

//route Prenotazione
app.get('/booking',function(req,res){
    res.render('booking',{title: 'Prenotazione'});
});


//route info (START)
app.get('/info',function(req,res){
    res.render('info',{title: 'Info'});
});
//info page request contact with email
app.post('/contact',function(req,res,next){
    var transport = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        port: 25,
        auth: {
            user :'dodo.romero1988@gmail.com',
            pass : config.password
        },
        tls: {
            rejectUnauthorized: false
        }

    });

    //Sfrutto una  email temp ( che sarà quella dell WEB app), che manda email
    // di contatto/info prendendo i dati dalla view info.ejs e le invia all'amministratore 
    var mailOp = {
        from:'Web app prova Althea beauty - <dodo.romero1988@gmail.com>',
        to: 'eduardo.romero@studenti.unicam.it',
        subject: 'Contact from App Althea beauty ',
        //Text
        text:'You have a new message from Althea beauty- User' + req.body.name +'\n' + 'Email:' +req.body.email +'\n'+ 'Subject:' + req.body.subject +'\n'+ 'Message:' +req.body.message,
        html:'<h3> You have anew message!</h3> <br/> <ul><li>From: ' + req.body.name +'@Althea beauty</li><li>' + 'Email:'+req.body.email+'</li><li> <p>' + req.body.message + '</p></li></ul>'
    };

    transport.sendMail(mailOp,(error,info) =>{
        if(error){
            
            console.log('email could notbe sent! \n'+ error);
            res.redirect('/');
            
        }else{
            console.log('Message sent succesfully!\n'+ info.response);
            res.redirect('/');
        }
    })

    
});
//end route info 

//Inizializio il server
var port = 3000;
app.listen(port,function(){
    console.log("Live ar Port 3000");
    
});

