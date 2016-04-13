var template = require('./templates/textual/index.handlebars');
var data = require('./resume.json');
require('./templates/textual/index.styl');

document.addEventListener('DOMContentLoaded', function() {
  var div = document.createElement('div');
  div.id = 'app';
  div.innerHTML = template(data);
  document.body.appendChild(div);
});