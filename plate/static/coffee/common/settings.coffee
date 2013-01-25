define ->

  class Settings
    _settings = undefined

    @get: (settings) ->
      _settings ?= (if settings? then settings else {})

  return Settings