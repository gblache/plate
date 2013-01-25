define [
  'underscore', 
  'backbone',
], (_, Backbone) ->

  class BaseView extends Backbone.View

    render: ->
      @.$el.html @template(@getJSON())

    getJSON: ->
      return {}