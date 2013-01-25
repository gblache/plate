define [
  'underscore', 
  'views/base_view',
  'common/urls',
  'common/request_manager',
  'models/current_user',
  'hbs!templates/dashboard_view'
], (_, BaseView, URLs, RequestManager, CurrentUser, DashboardViewTemplate) ->

  class DashboardView extends BaseView

    template: DashboardViewTemplate

    events:
      'click button.logout': '_onLogoutClicked'

    initialize: (options) ->
      @_urls = URLs.get()
      @_user = CurrentUser.get()

    getJSON: ->
      user: @_user.toJSON()
      urls: @_urls

    _onLogoutClicked: (ev) =>
      RequestManager.post 
        url: $(ev.target).attr('data-url')
        success: () ->
          window.location = '/'