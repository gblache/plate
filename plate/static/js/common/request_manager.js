
  define(['underscore', 'common/settings'], function(_, Settings) {
    var RequestManager;
    return RequestManager = (function() {
      var _settings;

      function RequestManager() {}

      _settings = Settings.get();

      RequestManager.post = function(args) {
        var options;
        options = _.extend(args, {
          type: 'post',
          headers: {
            'X-CSRFToken': _settings.csrfToken
          }
        });
        return $.ajax(options);
      };

      return RequestManager;

    })();
  });
