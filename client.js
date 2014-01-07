
// All this code will be injected into the client (in fact, only the exported method below)
// Don't require() anything here, it wont work !

module.exports = function(Snap) {

  // Here you can create services that will be accessible to apps

  // You can access RPC API like this
  var rpc = Snap.rpc;

  function MyServiceFactory(appName, config) {

    // Create new service instance
    var Files = {};

    Files.list = function(directory, cb) {

      // Call our 'echo' method exposed in index.js via RPC
      rpc.call('files:list', [str], function(err, results) {
        // If error (network, bad arguments, malformed request/response...), pass it to callback and return
        if(err) {
          return cb(err);
        }
        // No error & 'echo' return only one result
        return cb(null, results[0]);
      });

      // Return the service instance for potential chaining
      return Files;
    };

    // Return the service instance
    return Files;

  }

  // Register the service factory
  Snap.registerService('Files', MyServiceFactory);

  /*
    Your service will now be accessible on the sandbox

    Example, in an app:

    <script type="text/javascript">

      window.startApp = function(sandbox) {

        sandbox.myService.echo('hello world !', function(err, result) {
          if(err) {
            return console.error(err);
          }
          console.log('Echo response', result);
        });

      }

    </script>

  */

};
