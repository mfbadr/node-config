'use strict';

var morgan = require('morgan');
var bodyParser = require('body-parser');
//Require your controllers here, eg:
//  var priorities = require('../controllers/priorities');
//  var tasks = require('../controllers/tasks');

module.exports = function(app, express){
  // This doesn't change
  app.use(morgan('dev'));
  app.use(express.static(__dirname + '/../static'));
  app.use(bodyParser.urlencoded({extended:true}));
  
  //Routes go here and look like this, (task-master is the example)
  //  app.get('/', tasks.index);
  //  app.get('/tasks', tasks.index);
  //  app.post('/tasks', tasks.create);
  //  app.post('/tasks/:id/update', tasks.update);

  console.log('Pipeline Configured');
};


