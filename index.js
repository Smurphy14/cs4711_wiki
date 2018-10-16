const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const db = require(__dirname+'/private/dbInterface.js');

app.use(express.static(__dirname+'/public'));

//watch for restart
var chokidar = require('chokidar');
// One-liner for current directory, ignores .dotfiles
chokidar.watch('.', {ignored: /(^|[\/\\])\../}).on('all', (event, path) => {
  console.log(event, path);
});

startServer();
function startServer(){
    var port;
    if(process.argv[2])
        port = process.argv[2];
    else
        port = 8080;


    server.listen(port,()=>{
        console.log(`::running on port: ${port}`);
        init();
    })


    function init(){

    }
}


module.exports = {startServer};