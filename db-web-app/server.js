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
// const { isEmpty } = require('rxjs-compat/operator/isEmpty');

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

app.get('/todo/:WorkspaceID', function (req, res) {
    connection.query('SELECT * FROM Eintrag natural join ToDo where WorkspaceID = ? order by Datum asc ', req.params.WorkspaceID, function (error, results, fields) { 
    if (error) throw error;
      res.send(results);
    });
});

app.get('/ziel/:WorkspaceID', function (req, res) {
    connection.query('SELECT * FROM Eintrag natural join Ziel where WorkspaceID = ? order by Datum asc', req.params.WorkspaceID, function (error, results, fields) { 
    if (error) throw error;
      res.send(results);
    });
});

app.get('/kalender/:WorkspaceID', function (req, res) {
    connection.query('SELECT * FROM Eintrag natural join Kalender where WorkspaceID = ? order by Datum asc', req.params.WorkspaceID, function (error, results, fields) {
      if (error) throw error;
      res.send(results);
  });
});

app.get('/erinnerung/:WorkspaceID', function (req, res) {
  connection.query('SELECT * FROM Eintrag natural join Erinnerung where WorkspaceID = ? order by Datum asc' , req.params.WorkspaceID, function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

app.get('/tagebuch/:WorkspaceID', function (req, res) {
  connection.query('SELECT * FROM Eintrag natural join Tagebuch where WorkspaceID = ? order by Datum desc', req.params.WorkspaceID, function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

app.get('/motivation/:WorkspaceID', function (req, res) {
  // 'SELECT * FROM Motivation'
  const sql = 'select * from Motivation where MotivationID = (SELECT MotivationID FROM Workspace where WorkspaceID ='+req.params.WorkspaceID +')';
  connection.query(sql, function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

app.get('/galerie/:WorkspaceID', function (req, res) {
  const sql = 
  connection.query('SELECT * FROM Galerie natural join Bild where WorkspaceID = ?', req.params.WorkspaceID, function (error, results, fields) {
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

//spezifisches Getten
app.get('/eintrag/:EintragID/:Art', function (req, res) { 
  console.log('request body: '+ req.params.EintragID); 
  // id = request.param.EintragId;
  const Art = req.params.Art; 
  const sql = 'SELECT * FROM Eintrag natural join ' + Art + ' WHERE EintragID = ?';


  connection.query(sql ,req.params.EintragID, function (error, results, fields) { 
  if (error) throw error;
    console.log(results)
    res.send(results);
    
  });
});
 
app.get('/nutzer/:Nutzername/:Passwort', function (req, res) {
  //   console.log('request body: '); 
  //   console.dir(req.body);
  // //  
  //   const Nutzername = req.body.Nutzername; 
  //   const Passwort = req.body.Passwort;
    const Nutzername = req.params.Nutzername; 
    const Passwort = req.params.Passwort; 
    // console.log(Nutzername);
    // console.log(Passwort);
    
    const sql = "SELECT * FROM Nutzer WHERE Nutzername = ? AND Passwort = ? ";
    const values = [Nutzername, Passwort];
  
    connection.query(sql, values, function(error, results, fields) {
      if (results[0] == null ){
        console.log("null");
        results[0] = "404"
      }
      console.log(results)
      // if (error) throw error; 
      res.send(results); 
    });
}); 

app.get('/nutzer/:NutzerID', function (req, res) {
  console.log('request body: '+ req.params.NutzerID); 
  const sql = 'SELECT WorkspaceID FROM Workspace WHERE NutzerID = ?';
  connection.query( sql,req.params.NutzerID, function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

app.get('/workspace/:WorkspaceID', function (req, res) {
  console.log('request body: '+ req.params.WorkspaceID); 
  const sql = 'SELECT * FROM Nutzer natural join Workspace WHERE WorkspaceID = ?';
  connection.query( sql,req.params.WorkspaceID, function (error, results, fields) {
    res.send(results);
  });
});
  
// POST-Methoden
app.post('/nutzer', function (req, res) {
  console.log('request body: '); 
  console.dir(req.body); 

  const Nutzername = req.body.Nutzername; 
  const GanzerName = req.body.GanzerName; 
  const Email = req.body.Email; 
  const Passwort = req.body.Passwort; 

  const sql = "INSERT INTO Nutzer (Nutzername, Ganzername, Email, Passwort)" + "VALUES (?, ?, ?, ?)";
  const values = [Nutzername, GanzerName, Email, Passwort];

  connection.query(sql, values, function(error, results, fields) {
    sql2 = "INSERT INTO Workspace (NutzerID, MotivationID)" + " VALUES (?, (SELECT FLOOR (RAND () * (100011-100001) + 100001)))"; 
    values2 = [results.insertId];

    connection.query(sql2, values2, function(error, results, fields) {
        if (error) throw error; 
        res.send(results); 
    });
  });
}); 

app.post('/eintragerstellen', function (req, res) {
  console.log('request body: '); 
  // console.dir(req.body); 

  const Datum = req.body.Datum; 
  const Titel = req.body.Titel; 
  const Untertitel = req.body.Untertitel; 
  const Text = req.body.Text;
  const Notiz = req.body.Notiz;
  const Anmerkung = req.body.Anmerkung;
  const Art = req.body.EintragArt;
  const WorkspaceID =req.body.WorkspaceID;
  const Uhrzeit = req.body.Uhrzeit;

  const sql1 = "INSERT INTO Eintrag (Datum, Titel, Untertitel, Text, Notiz, Anmerkung)" + "VALUES (?, ?, ?, ?, ?, ?)";
  const values1 = [Datum, Titel, Untertitel, Text, Notiz, Anmerkung];
  
  connection.query(sql1, values1, function(error, results, fields) {
    console.log(results.insertId);
    if (Art == "Erinnerung" || Art == "Kalender"){
      console.log("!")
      const sql2 = "INSERT INTO " + Art + " (WorkspaceID, EintragID, Uhrzeit)" + "VALUES (?, ?, ?)";
      const values2 = [WorkspaceID, results.insertId, Uhrzeit];
      connection.query(sql2, values2, function(error, results, fields) {
        if (error) throw error; 
        res.send(results); 
      });
    }else{
      console.log("?")
      const sql2 = "INSERT INTO "+ Art +" (WorkspaceID, EintragID)" + " VALUES (?, ?)" 
      const values2 = [WorkspaceID, results.insertId];
      connection.query(sql2, values2, function(error, results, fields) {
        if (error) throw error; 
        res.send(results); 
      });
    }
  }); 
}); 

// PUT-Methode
app.put('/eintragUpdate/:Art', function (req, res) {
  // console.log('request body: '+ req.params.EintragID); 
  console.log('request body: '); 
  console.dir(req.body); 
  
  const EintragID = req.body[0].EintragID;
  const Datum = req.body[0].Datum; 
  const Titel = req.body[0].Titel; 
  const Untertitel = req.body[0].Untertitel; 
  const Text = req.body[0].Text; 
  const Notiz = req.body[0].Notiz; 
  const Anmerkung = req.body[0].Anmerkung; 
  const Uhrzeit = req.body[0].Uhrzeit;

  const Art = req.params.Art;
  // console.log(Art);
  
  const sql = "UPDATE Eintrag SET Datum = ?, Titel = ?, Untertitel = ?, Text = ?, Notiz = ?, Anmerkung = ? WHERE EintragID = ?" ;
  
  const values = [Datum, Titel, Untertitel, Text, Notiz, Anmerkung, EintragID];

    connection.query(sql, values, function(error, results, fields) {   
      // if (error) throw error; 
      // res.send(results); 

      if (Art == "Erinnerung" || Art == "Kalender"){
        console.log("Art")
        console.log(Art)
        const sql2 = "UPDATE " + Art + " SET Uhrzeit = ? WHERE EintragID = ?";
        const values2 = [Uhrzeit, EintragID];
        connection.query(sql2, values2, function(error, results, fields) {
          console.log(sql2);
          if (error) throw error; 
          res.send(results); 
        });
      }
    }); 
    
}); 

// Delete-Methoden

app.delete('/zielDelete/:EintragID', function (req, res) {
  const sql = " DELETE FROM Ziel WHERE EintragID = ?";
  const sql2 = "DELETE FROM Eintrag WHERE EintragID = ?";
  const values =[req.params.EintragID];
  connection.query(sql , values, function(error, results, fields) {});
  connection.query(sql2, values, function(error, results, fields) {});
  console.log("deleteZiel");
}); 

app.delete('/kalenderDelete/:EintragID', function (req, res) {
  const sql = " DELETE FROM Kalender WHERE EintragID = ?";
  const sql2 = "DELETE FROM Eintrag WHERE EintragID = ?";
  const values =[req.params.EintragID];
  connection.query(sql , values, function(error, results, fields) {});
  connection.query(sql2, values, function(error, results, fields) {});
  console.log("deleteKalender");
}); 

app.delete('/tagebuchDelete/:EintragID', function (req, res) {
  const sql = " DELETE FROM Tagebuch WHERE EintragID = ?";
  const sql2 = "DELETE FROM Eintrag WHERE EintragID = ?";
  const values =[req.params.EintragID];
  connection.query(sql , values, function(error, results, fields) {});
  connection.query(sql2, values, function(error, results, fields) {});
  console.log("deleteTagebuch");
}); 

app.delete('/todoDelete/:EintragID', function (req, res) {
  const sql = " DELETE FROM ToDo WHERE EintragID = ?";
  const sql2 = "DELETE FROM Eintrag WHERE EintragID = ?";
  const values =[req.params.EintragID];
  connection.query(sql , values, function(error, results, fields) {});
  connection.query(sql2, values, function(error, results, fields) {});
  console.log("deleteToDo");
}); 

app.delete('/erinnerungDelete/:EintragID', function (req, res) {
  const sql = " DELETE FROM Erinnerung WHERE EintragID = ?";
  const sql2 = "DELETE FROM Eintrag WHERE EintragID = ?";
  const values =[req.params.EintragID];
  connection.query(sql , values, function(error, results, fields) {});
  connection.query(sql2, values, function(error, results, fields) {});
  console.log("deleteErinnerung");
}); 
