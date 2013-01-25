({
  appDir: 'static/js',
  baseUrl: '.',
  dir: 'static/build/js',
  optimize: 'uglify',
  paths: {
    'jquery': 'jquery-require',
    'underscore': 'lib/underscore',
    'backbone': 'lib/backbone',
    'handlebars': 'lib/handlebars',
    'i18nprecompile': 'lib/i18nprecompile',
    'json2': 'lib/json2',
    'hbs': 'lib/hbs'
  },
  skipDirOptimize: true,
  hbs: {
    'i18nDirectory': 'i18n/'
  },
  modules: [
    {
      name: 'controllers/application_controller',
      exclude: ['require']
    },
    {
      name: 'views/dashboard_view',
      exclude: ['common/exclude']
    },
    {
      name: 'views/login_view',
      exclude: ['common/exclude']
    },
  ]
})
