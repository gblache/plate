define [
  'underscore', 
  'views/base_view',
  'common/urls',
  'hbs!templates/login_view'
], (_, BaseView, URLs, LoginViewTemplate) ->

  class LoginView extends BaseView

    template: LoginViewTemplate

    initialize: () ->
      @_urls = URLs.get()

    getJSON: ->
      urls: @_urls