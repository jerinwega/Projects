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
        var posted = database.collection("posts").find({}).toArray(function (err, posts) {
            
            res.render('dashboard.ejs', {
                ja_auth: results,
                user: results.user,
                posts: posts
    
            });

        });
             });

    } else {
        res.redirect('/login');
    }
   
});



app.post('/auth', function (req, response) {

    var login = database.collection('ja_auth').findOne({}, function (err, results) {



        if (results['user'] === req.body.user) {

            //  if (bcrypt.compareSync(req.body.pass, results['pass'])) {}

            bcrypt.compare(req.body.pass, results['pass'], function (err, res) {

                //                console.log(res);

                if (res == true) {
                    var data = {
                        user: req.body.user,
                        pass: req.body.pass
                    }

                    req.session.user = data;
                    
                    response.redirect('/dashboard');

                } else {
                    response.redirect('/login');
                }
            });




        } else {
            response.redirect('/login');
        }



    });

});

app.get('/addpost', (req, res) => {

    if (req.session.user && req.cookies.cookie_id) {
        res.render('addpost.ejs', {
            posts: res
        });

    } else {
        res.redirect('/login');
    }
});


app.post('/addpost', (req, res) => {

    database.collection('posts').save(req.body, function (err, request) {
        if (err) return console.log(err);
        
        });

 
    res.redirect('/dashboard');

});

app.get('/updatepost:title', function(req, res){
    database.collection('posts').find({}).toArray(function (err, response){
        console.log(response);
        res.redirect('/addpost');
    });
});

app.post('/updatepost:title', function(req, res){
    database.collection('posts').updateOne({ title: req.body.title,
      content: req.body.content}, req.body, function(err, result){
        if(err) return console.log(err);
        console.log('Details updated successfully');
        res.redirect('/dashboard');
    });
});


app.get('/deletepost', (req, res) => {
     database.collection('posts').deleteOne({}, function(err,result){
        if(err) return console.log(err);
        console.log('post is successfully deleted');
        res.redirect('/dashboard');
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


app.use(function (req, res, next) {
    res.status(404).send("Error page 404!")
});

app.listen(1234, function () {
    console.log('port 1234');
});
