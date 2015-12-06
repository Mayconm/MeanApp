var http = require('http'),
    httpServer,
    app = require('./config/express')(),
    DB_URI = 'mongodb://mzmserver.com/siagi',
    mongoose = require('./config/database.js'),
    serverPort = app.get('port');

function running () {
  console.log('Express Server is running at port: ' + serverPort);
}

mongoose(DB_URI);

httpServer = http.createServer(app);
httpServer.listen(serverPort, running);