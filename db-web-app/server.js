// server.js

const SERVER_PORT = 8080;

var express = require('express');
var path = require('path');
var mysql = require('mysql');
var cors = require('cors');

// var bodyParser = require('body-parser')
var app = express();
var index;
app.use(cors());
// app.use(express.bodyParser());
//  app.use(app.router);
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
// app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '/dist/db-web-app'))); 

app.get('/', function(req,res)
{
    res.sendFile('app.component.html', { root: __dirname + '/src/app'});
});

app.get('/main', function(req,res)
{
    res.sendFile('main.component.html', { root: __dirname + '/src/app'});
}); 

 //hochschul server
 const connection = mysql.createConnection({
    host: "195.37.176.178", 
    port: "20133",
    user: "Gruppe5", 
    password: "PlrROASg,'MPyp92yVN/Q00/Y\\?8g+1e", 
    database: "20_Gruppe5_DB"
});









    
var server = app.listen(SERVER_PORT, function (){
    let host = server.address().address,
        port = server.address().port;

        console.log("App listening at http://%s:%s", host, port)
});

app.get('/Eintrag', function (req, res) {

    connection.query('SELECT * FROM Eintrag', function (error, results, fields) {
      if (error) throw error;
      res.send(results);

    });
});

app.get('/Kalender', function (req, res) {

    connection.query('SELECT * FROM Kalender', function (error, results, fields) {
      if (error) throw error;
      res.send(results);

  });
});