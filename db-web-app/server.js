// server.js

    // set up =========================
    var express = require('express'); 
    var app = express(); 
    var path = require('path'); 
    var mysql = require('mysql'); 

    // configuration ==================

    app.use(express.static(path.join(__dirname, '/dist/db-web-app'))); 

    // application ---------------------------------------------------

    app.get('/', function(req,res)
    {
        res.sendFile('index.html', { root: __dirname + '/dist/db-web-app'});
    }); 

    app.get('/test/', function(req, res)
    {
        var connection = mysql.createConnection({
            host: "195.37.176.178", 
            port: "20133",
            user: "Gruppe5", 
            password: "PlrROASg,'MPyp92yVN/Q00/Y\\?8g+1e", 
            database: "20_Gruppe5_DB"
        });

        connection.connect(function(err)
        {
            if(err) throw err; 
            console.log("connected"); 

            //connection.log("connected"); 

            connection.query("SELECT * FROM 20_Gruppe5_DB.Nutzer", function(err, result)
            {
                if(err) throw err; 
                res.send(result); 
            }); 

            connection.end(); 

        }); 
    });


    // listen (start app with node server.js) =========================
    app.listen(8080, function(){
        console.log("App listening on port 8080");
    }); 

    // Seite für Leaflet: http://www.liedman.net/leaflet-routing-machine/