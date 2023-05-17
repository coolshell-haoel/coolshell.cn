(function() {
  var Async;

  Async = (function() {

    function Async() {
      this.callbacks = [];
      this.running = false;
    }

    Async.prototype.series = function(func) {
      if (this.running) {
        this.callbacks.push(func);
      } else {
        this.running = true;
        func();
      }
    };

    Async.prototype.callback = function() {
      if (this.callbacks.length > 0) {
        this.callbacks.shift()();
      } else {
        this.running = false;
      }
    };

    return Async;

  })();

  window.Async = Async;

}).call(this);
