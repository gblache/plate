
  define(function() {
    var URLs;
    URLs = (function() {
      var _urls;

      function URLs() {}

      _urls = void 0;

      URLs.get = function(urls) {
        return _urls != null ? _urls : _urls = (urls != null ? urls : {});
      };

      return URLs;

    })();
    return URLs;
  });
