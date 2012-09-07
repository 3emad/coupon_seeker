
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , hogan = require('hogan.js')
  , cons = require('consolidate');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'hogan');
    app.register('html', {
        compile: function() {
            var t = hogan.compile.apply(hogan, arguments);
            return function() {
                return t.render.apply(t, arguments);
            }
        }
    });
    //app.set('view options',{layout:false});
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(express.session({ secret: 'your secret here' }));
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);

app.listen(8080, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
