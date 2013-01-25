(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  define(['common/exclude', 'underscore', 'backbone', 'models/user', 'models/current_user', 'common/urls', 'common/settings'], function(Exclude, _, Backbone, User, CurrentUser, URLs, Settings) {
    var ApplicationController;
    return ApplicationController = (function() {

      __extends(ApplicationController, Backbone.Router);

      function ApplicationController() {
        this._root = __bind(this._root, this);
        this._onViewLoaded = __bind(this._onViewLoaded, this);
        this._require = __bind(this._require, this);
        ApplicationController.__super__.constructor.apply(this, arguments);
      }

      ApplicationController.prototype.routes = {
        '*all': '_root'
      };

      ApplicationController.prototype.initialize = function(options) {
        ApplicationController.__super__.initialize.apply(this, arguments);
        this._output = options.output;
        Settings.get({
          csrfToken: options.csrfToken
        });
        URLs.get(options.urls);
        CurrentUser.get(options.user);
        if (options.viewName != null) {
          return this._require(options.viewName);
        } else {
          return Backbone.history.start();
        }
      };

      ApplicationController.prototype._require = function(viewName) {
        return require(["views/" + viewName + "_view"], this._onViewLoaded);
      };

      ApplicationController.prototype._onViewLoaded = function(ViewClass) {
        var _ref;
        if ((_ref = this._view) != null) _ref.remove();
        this._view = new ViewClass({
          output: this.output
        });
        this._view.render();
        $('#view-content').empty();
        return $('#view-content').append(this._view.el);
      };

      ApplicationController.prototype._root = function() {
        return this._require('dashboard');
      };

      return ApplicationController;

    })();
  });

}).call(this);
