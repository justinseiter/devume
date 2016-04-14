// Load app config
var config = require('./config.json');

// Templating
var template = require('./templates/' + config.theme + '/index.handlebars');
require('./templates/' + config.theme + '/index.styl');

// Resume
var data = require('./resume-example.json');

// Load the app :)
document.addEventListener('DOMContentLoaded', function() {
  var div = document.createElement('div');
  div.id = 'app';
  div.innerHTML = template(data);
  document.body.appendChild(div);
});