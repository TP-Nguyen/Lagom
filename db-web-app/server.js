// server.js

    // set up =========================
    var express = require('express');  
    var path = require('path'); 
    var mysql = require('mysql'); 
    var cors = require('cors');
    var app = express();

    app.use(cors());


    // configuration ==================

    app.use(express.static(path.join(__dirname, '/src/app'))); 
    // app.use(express.static(path.join(__dirname, '/dist/db-web-app'))); 

    //hochschul server
    var connection = mysql.createConnection({
        host: "195.37.176.178", 
        port: "20133",
        user: "Gruppe5", 
        password: "PlrROASg,'MPyp92yVN/Q00/Y\\?8g+1e", 
        database: "20_Gruppe5_DB"
    });

    // var server = app.listen(SERVER_PORT, function (){
    //     let host = server.address().address,
    //         port = server.address().port;

    //         console.log("Lagom", host, port)
    // });

    // application ---------------------------------------------------

    app.get('/main', function(req,res)
    {
        res.sendFile('main.component.html', { root: __dirname + '/src/app'});
    }); 

    
    app.get('/test/', function(req, res)
    {
        connection.connect(function(err)
        {
            // if(err) throw err; 
            // console.log("connected");
            connection.query("SELECT * FROM 20_Gruppe5_DB.Nutzer", function(err, result)
            {
                if(err) throw err; 
                res.send(result); 
            }); 
            // connection.end(); 
        }); 
    });
    app.get('/Eintrag', function(req, res)
    {
        connection.connect(function(err)
        {
            connection.query("SELECT * FROM 20_Gruppe5_DB.Eintrag", function(err, result)
            {
                if(err) throw err; 
                res.send(result); 
            }); 
            connection.end(); 
        }); 
    });

    // app.get('/', function(req,res)
    // {
    //     res.sendFile('app.component.html', { root: __dirname + '/src/app'});
    // });

    // listen (start app with node server.js) =========================
    app.listen(8080, function(){
        console.log("App listening on port 8080");
    }); 

    // Seite für Leaflet: http://www.liedman.net/leaflet-routing-machine/