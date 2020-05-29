// server.js
const SERVER_PORT = 8080;

var express = require('express');
var path = require('path');
var mysql = require('mysql');
var cors = require('cors');

var app = express();
var index;
app.use(cors());

var bodyParser = require('body-parser'); 

 // parse application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({ extended: false }))
 // parse application/json
 app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '/dist/db-web-app'))); 

app.get('/', function(req,res)
{
    res.sendFile('app.component.html', { root: __dirname + '/src/app'});
});

app.get('/main', function(req,res)
{
    res.sendFile('main.component.html', { root: __dirname + '/src/app/main'});
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


// GET-Anfragen 

app.get('/eintrag', function (req, res) {
  connection.query('SELECT * FROM Eintrag', function (error, results, fields) {
  if (error) throw error;
    res.send(results);

  });
});

app.get('/todo', function (req, res) {
    connection.query('SELECT * FROM Eintrag natural join ToDo', function (error, results, fields) { 
    if (error) throw error;
      res.send(results);
    });
});

app.get('/ziel', function (req, res) {
    connection.query('SELECT * FROM Eintrag natural join Ziel', function (error, results, fields) { 
    if (error) throw error;
      res.send(results);
    });
});

app.get('/kalender', function (req, res) {
    connection.query('SELECT * FROM Eintrag natural join Kalender', function (error, results, fields) {
      if (error) throw error;
      res.send(results);
  });
});

app.get('/erinnerung', function (req, res) {
  connection.query('SELECT * FROM Eintrag natural join Erinnerung', function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

app.get('/tagebuch', function (req, res) {
  connection.query('SELECT * FROM Eintrag natural join Tagebuch', function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

app.get('/motivation', function (req, res) {
  connection.query('SELECT * FROM Motivation', function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

app.get('/nutzer', function (req, res) {
  connection.query('SELECT * FROM Nutzer', function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

app.get('/galerie', function (req, res) {
  connection.query('SELECT * FROM Galerie', function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

app.get('/nutzer', function (req, res) {

  connection.query('SELECT * FROM Nutzer', function (error, results, fields) {
    if (error) throw error;
    res.send(results);

});
});
 

// POST-Methoden

app.post('/nutzer', function (request, response){
  console.log('request body: '); 
  console.dir(request.body); 

  const Nutzername = request.body.Nutzername; 
  const GanzerName = request.body.GanzerName; 
  const Email = request.body.Email; 
  const Passwort = request.body.Passwort; 

  const sql = "INSERT INTO Nutzer (Nutzername, Ganzername, Email, Passwort)" + "VALUES (?, ?, ?, ?)";
  const values = [Nutzername, GanzerName, Email, Passwort];

    connection.query(sql, values, function(error, results, fields) {
      if (error) throw error; 
      response.send(results); 
    }); 
}); 

// app.post('/tugend', function (request, response) {
//     console.log('request body: ');
//     console.dir(request.body);

//     const name = request.body.name;
//     const beschreibung = request.body.beschreibung;
//     const wert = request.body.wert;
//     const benoetigteWdh = request.body.benoetigteWdh;
//     const aeltesterID = 7;
//     const kategorieID = request.body.kategorieID;
//     const sql = "INSERT INTO fantasy_score_db.tugend (name, beschreibung, wert, benoetigteWdh, aeltesterID, kategorieID) " +
//       "VALUES (?, ?, ?, ?, ?, ?)";
//     const values = [name, beschreibung, wert, benoetigteWdh, aeltesterID, kategorieID];
//    // pool.query( "INSERT INTO fantasy_score_db.tugend (name, beschreibung, wert, benoetigteWdh, aeltesterID, kategorieID) " +
//     //  "VALUES ([name], [beschreibung], [wert], [benoetigteWdh], [aeltesterID], [kategorieID])",
//     pool.query( sql, values,
//       function (error, results, fields) {
//       if (error) throw error;
//       response.send(results);

//     });
//   });