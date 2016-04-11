var template = require('./template.handlebars');
var data = require('./resume.json');
require('./index.styl');


document.addEventListener('DOMContentLoaded', function() {
  var div = document.createElement('div');
  div.id = 'app';
  div.innerHTML = template(data);
  document.body.appendChild(div);
});