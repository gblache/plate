define [
  # Include the common excludes here to ensure they won't be loaded
  # at runtime when everything is compiled.
  'common/exclude',
  'underscore', 
  'backbone',
  'models/user',
  'models/current_user',
  'common/urls',
  'common/settings'
], (Exclude, _, Backbone, User, CurrentUser, URLs, Settings) ->

  class ApplicationController extends Backbone.Router

    routes: 
      '*all': '_root'

    initialize: (options) ->
      super

      # Set properites from options.
      @_output = options.output

      # Setup Settings singleton.
      Settings.get
        csrfToken: options.csrfToken

      # Setup URL singleton.
      URLs.get options.urls 

      # Setup CurrentUser singleton.
      CurrentUser.get options.user

      # Load a template if it is provided or start the router.
      if options.viewName?
        @_require options.viewName
      else
        Backbone.history.start()

    _require: (viewName) =>
      require ["views/#{viewName}_view"], @_onViewLoaded

    # Remove the old view if it exists and instantiate and render
    # the new one.
    _onViewLoaded: (ViewClass) =>
      @_view?.remove()

      @_view = new ViewClass 
        output: @output

      @_view.render()
      
      $('#view-content').empty()
      $('#view-content').append(@_view.el)

    # This is a catch all, base route.
    _root: () =>
      @_require 'dashboard'