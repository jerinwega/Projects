const express = require('express');
const bodyparser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var bcrypt = require('bcrypt');
var cookieParser = require('cookie-parser');
var session = require('express-session');
const app = express();



const url = 'mongodb://localhost:27017';
const dbname = 'db_admin';
var database;

app.set('view engine', 'ejs');

app.use(cookieParser());

app.use(session({
    key: 'cookie_id',
    secret: 'C4D144E1169F8AA2B24EC1D41C9A6',
    resave: true,
    saveUninitialized: true,
    cookie: {
        expires: 600000
    }
}));


//app.use(function (req, res, next) {
//  
//  var cookie = req.cookies.cookieName;
//console.log('cookie exists', cookie);
//});


app.use('/assets', express.static('assets'));

app.use(bodyparser.urlencoded({
    extended: true
}));

mongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log('Connected successfully');
    database = client.db(dbname);
});



app.use((req, res, next) => {
    if (req.cookies.cookie_id && !req.session.user) {
        res.clearCookie('cookie_id');
    }
    next();
});

var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.cookie_id) {
        res.redirect('/dashboard');
    } else {
        next();
    }
};

app.get('/', function (req, res) {

    res.sendFile(__dirname + "/home.html");
});

app.get('/login', function (req, res) {
    var auth = database.collection('ja_auth').findOne({}, function (err, results) {
        res.render('login.ejs', {
            ja_auth: results
        });
    });
});


app.get('/dashboard', (req, res) => {

    if (req.session.user && req.cookies.cookie_id) {
        var auth = database.collection('ja_auth').findOne({}, function (err, results) {
            res.render('addpost.ejs', {
                ja_auth: results
            });
        
            //         res.send('<h4>Welcome</h4>');
        });
    } else {
        res.redirect('/login');
    }
});



app.post('/auth', function (req, response) {

    var login = database.collection('ja_auth').findOne({}, function (err, results) {



        if (results['user'] === req.body.user) {

            //  if (bcrypt.compareSync(req.body.pass, results['pass'])) {}

            bcrypt.compare(req.body.pass, results['pass'], function(err, res) {
                
                console.log(res);
                
                 if (res == true) {
                        var data =  {
                                user: req.body.user,
                                pass: req.body.pass
                                    }

                    req.session.user = data;

                    response.redirect('/dashboard');
           
          }
                else{
                     response.redirect('/login');
                }
                });
              
         
           
                
        } 
        else {
            response.redirect('/login');
        }



    });

});
app.post('/addpost', (req, res) => {
    
    database.collection('posts').save(req.body, function(err, request){
        if(err) return console.log(err);
        console.log('saved to database');
         res.render('dashboard.ejs', {
                posts: request
            });
    });
    
});

 
app.get('/logout', (req, res) => {
    if (req.session.user && req.cookies.cookie_id) {
        res.clearCookie('cookie_id');
        res.redirect('/login');
    } else {
        res.redirect('/login');
    }
});



//     Post.find({}, (err, posts) => {
//      res.render('dashboard', { posts: posts})
//   });
//app.post('/addpost', (req, res) => {
//    var Post =  {
//                                title: req.body.title,
//                                content: req.body.content
//                                    }
//    var postData = new Post(req.body);
//    postData.save().then( result => {
//        res.redirect('/dashboard');
//    }).catch(err => {
//        res.status(400).send("Unable to save data");
//    });
//});


app.use(function (req, res, next) {
    res.status(404).send("Error page 404!")
});

app.listen(1234, function () {
    console.log('port 1234');
});
