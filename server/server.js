// require dependencies

var express = require('express'),
    config = require('./config.js'),
    messages = require('./routes/messages');

// bootstrap express

var app = express();

app.use(express.logger());
app.use(express.bodyParser());
app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

// we server static files under /static

app.use('/static', express.static(config.webRoot));

// our JSON api answers under /api

app.get('/api/messages', messages.findAll);

app.get('/api/messages/:id', messages.findById);
app.post('/api/messages', messages.addMessage);
app.put('/api/messages/:id', messages.updateMessage);
app.delete('/api/messages/:id', messages.deleteMessage);

app.get('/partials/:name', function(req, res) {
    res.sendfile(config.webRoot + '/partials/' + req.params.name);
});

// all other requests are redirected to our index.html file

app.get('*', function(req, res) {
    res.sendfile('index.html', {root: config.webRoot});
});

// start the server

app.listen(config.listenPort);
console.log('Listening on port ' + config.listenPort + '...');