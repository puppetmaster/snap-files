
// SNAP Files Plugin 

// You can require all your own server modules here
// var _ = require('underscore');

// The "load" method will be called (if defined) by SNAP upon its initiation
exports.load = function(pluginOpts, next) {

  // "this" will target the SNAP parent application
  var app = this;

  app.logger.info('Loading plugin snap-files !');
  app.logger.info('Plugin options are:', pluginOpts);

  // Here you can create & expose your own methods via RPC, extend or alter SNAP behavior
  // See snap-lib/lib/api/* to see more advanced examples

  // A simple async echo method
  function echo(params, cb) {
    var str = params[0];
    return cb(null, str);
  }

  // Expose it via RPC
  app.server.expose('files:list', echo);

  // Inject client-side code. See "client.js"
  app.client.inject(__dirname + '/client.js');

  // You shall call "next()" when you're done initializing your plugin
  app.logger.info('Plugin loaded !');
  return next();

};

// Like "load", but called on application exit (SIGINT)
exports.unload = function(next) {

};
