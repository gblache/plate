(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  define(['models/user'], function(User) {
    var CurrentUser, _CurrentUser;
    CurrentUser = (function() {
      var _instance;

      function CurrentUser() {}

      _instance = void 0;

      CurrentUser.get = function(args) {
        return _instance != null ? _instance : _instance = new _CurrentUser(args);
      };

      return CurrentUser;

    })();
    _CurrentUser = (function() {

      __extends(_CurrentUser, User);

      function _CurrentUser() {
        _CurrentUser.__super__.constructor.apply(this, arguments);
      }

      return _CurrentUser;

    })();
    return CurrentUser;
  });

}).call(this);
