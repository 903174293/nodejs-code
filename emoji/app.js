var express = require("express");
var path=require('path');
var app = express();
var emoji = require('emoji');
console.log('😎', emoji.unifiedToHTML('😎'));

server  = require('http').Server(app);
app.set('views',__dirname);    // 设置视图 
app.set('view engine', 'html'); 
app.engine( '.html', require( 'ejs' ).__express );
require('./index')(app, emoji);      //路由配置文件
server.listen(80,function(){
    console.log('App start,port 80.');
});