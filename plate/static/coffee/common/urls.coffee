define ->

  class URLs
    _urls = undefined

    @get: (urls) ->
      _urls ?= (if urls? then urls else {})

  return URLs