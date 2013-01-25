(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  define(['underscore', 'views/base_view', 'common/urls', 'common/request_manager', 'models/current_user', 'hbs!templates/dashboard_view'], function(_, BaseView, URLs, RequestManager, CurrentUser, DashboardViewTemplate) {
    var DashboardView;
    return DashboardView = (function() {

      __extends(DashboardView, BaseView);

      function DashboardView() {
        this._onLogoutClicked = __bind(this._onLogoutClicked, this);
        DashboardView.__super__.constructor.apply(this, arguments);
      }

      DashboardView.prototype.template = DashboardViewTemplate;

      DashboardView.prototype.events = {
        'click button.logout': '_onLogoutClicked'
      };

      DashboardView.prototype.initialize = function(options) {
        this._urls = URLs.get();
        return this._user = CurrentUser.get();
      };

      DashboardView.prototype.getJSON = function() {
        return {
          user: this._user.toJSON(),
          urls: this._urls
        };
      };

      DashboardView.prototype._onLogoutClicked = function(ev) {
        return RequestManager.post({
          url: $(ev.target).attr('data-url'),
          success: function() {
            return window.location = '/';
          }
        });
      };

      return DashboardView;

    })();
  });

}).call(this);
