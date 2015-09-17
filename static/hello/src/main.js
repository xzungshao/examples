define(function(require) {

  var Spinning = require('./spinning');

  var m1 = require('./mod1');

  m1.showme('mm');
  m1.showher('nn');
  m1.los();

  
  var s = new Spinning('#container');
  s.render();

});

