(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  define(['underscore', 'views/base_view', 'common/urls', 'hbs!templates/login_view'], function(_, BaseView, URLs, LoginViewTemplate) {
    var LoginView;
    return LoginView = (function() {

      __extends(LoginView, BaseView);

      function LoginView() {
        LoginView.__super__.constructor.apply(this, arguments);
      }

      LoginView.prototype.template = LoginViewTemplate;

      LoginView.prototype.initialize = function() {
        return this._urls = URLs.get();
      };

      LoginView.prototype.getJSON = function() {
        return {
          urls: this._urls
        };
      };

      return LoginView;

    })();
  });

}).call(this);
