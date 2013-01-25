
  define(function() {
    var Settings;
    Settings = (function() {
      var _settings;

      function Settings() {}

      _settings = void 0;

      Settings.get = function(settings) {
        return _settings != null ? _settings : _settings = (settings != null ? settings : {});
      };

      return Settings;

    })();
    return Settings;
  });
