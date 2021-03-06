// Generated by CoffeeScript 1.4.0

define(["jquery"], function() {
  var Controller;
  return Controller = (function() {

    function Controller(view) {
      this.view = view;
    }

    Controller.prototype.activate = function() {
      return this.view.show();
    };

    Controller.prototype.deactivate = function() {
      return this.view.hide();
    };

    return Controller;

  })();
});
