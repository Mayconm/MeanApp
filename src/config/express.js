var express = require('express'),
    load = require('express-load'),
    bodyParser = require('body-parser');

module.exports = function () {
    var app = express();

    app.set('port', 3000);
    //static
    app.use(express.static('./public'));
    //template engine
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    //body parser
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    //
    app.use(require('method-override')());
    
    load('models', {cwd: 'app'})
            .then('controllers')
            .then('routes')
            .into(app);

    return app;
};