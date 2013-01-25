define ['underscore', 'common/settings'], (_, Settings) ->

  class RequestManager

    _settings = Settings.get()

    @post: (args) ->
      options = _.extend args,
        type: 'post'
        headers:
          'X-CSRFToken': _settings.csrfToken
      $.ajax options
        