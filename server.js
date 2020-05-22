//server.js
    const SERVER_PORT = 8080;

    let express = require('express');
    let path = require('path');
    let mysql = require('mysql');
    let cors = require('cors');

    let app = express();
    app.use(cors());


    app.use(express.static(path.join(__dirname, '/dist/fantasy-score-app'))); //'/dist'

    app.get('/', function(req, res)
    {
        res.sendFile('index.html', {root:__dirname+'/dist/fantasy-score-app'}); //'/dist'
    });

    const pool = mysql.createPool({
        host: "195.37.176.178",
        port: "20133",
        user: "Gruppe4",
        password: ',O64*.dnm/yKH%BpvJcNqq~k"WX\\O:kJ',
        database: "20_Gruppe4_DB"
    });

    let server = app.listen(SERVER_PORT, function (){
        let host = server.address().address,
            port = server.address().port;

            console.log("Fantasy app listening at http://%s:%s", host, port)
    });

    app.get('/buerger', function (req, res) {

        pool.query('SELECT * FROM buerger', function (error, results, fields) {
          if (error) throw error;
          res.send(results);

        });
      });

    app.get('/kategorien', function (req, res) {

      pool.query('SELECT * FROM kategorie', function (error, results, fields) {
        if (error) throw error;
        res.send(results);

      });
    });
