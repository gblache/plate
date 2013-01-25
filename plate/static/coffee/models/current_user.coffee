define ['models/user'], (User) ->

  class CurrentUser
    _instance = undefined

    @get: (args) ->
      _instance ?= new _CurrentUser args

  class _CurrentUser extends User

  return CurrentUser