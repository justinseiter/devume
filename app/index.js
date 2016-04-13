// Templating
var template = require('./templates/textual/index.handlebars');
require('./templates/textual/index.styl');

var data = require('./resume.json');

document.addEventListener('DOMContentLoaded', function() {
  var div = document.createElement('div');
  div.id = 'app';
  div.innerHTML = template(data);
  document.body.appendChild(div);
});