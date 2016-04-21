var express = require("express");
var path = require('path');

var mysql = require('mysql');

//创建连接  
var client = mysql.createConnection({
    host: '10.255.33.106',
    user: 'test',
    password: 'test123',
    database: 'uu-dream-wx'
});

client.connect();
//client.query("use uu-dream-wx");

var description = '';
client.query('SELECT * FROM wx_feedback ORDER BY created_time DESC LIMIT 1',
    function(err, results, fields) {
        if (err) {
            throw err;
        }

        if (results) {
            for (var i = 0; i < results.length; i++) {
                console.log("%d\t%s\t%s", results[i].id, results[i].phone, results[i].description);
                description = results[i].description;
            }
        }
        client.end();

        console.log('description : ' + description);

        var app = express();
        var emoji = require('emoji');
        server = require('http').Server(app);
        app.set('views', __dirname); // 设置视图 
        app.set('view engine', 'html');
        app.engine('.html', require('ejs').__express);
        require('./index')(app, emoji, description); //路由配置文件
        server.listen(80, function() {
            console.log('App start, port 80.');
        });
    }
);