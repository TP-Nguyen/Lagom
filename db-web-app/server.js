// server.js

    // set up =========================
    var express = require('express'); 
    var app = express(); 
    var path = require('path'); 

    // configuration ==================

    app.use(express.static(path.join(_dirname, '/dist/db-web-app'))); 

    // application ---------------------------------------------------

    app.get('/', function(req,res)
    {
        res.sendFile('index.html', { root: _dirname+'/dist/db-web-app'});
    }); 



    // listen (start app with node server.js) =========================
    app.listen(8080, function(){
        console.log("App listening on port 8080");
    }); 

    // Seite für Leaflet: http://www.liedman.net/leaflet-routing-machine/