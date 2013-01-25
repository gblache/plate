from django.conf.urls.defaults import patterns, url


urlpatterns = patterns('base.views',
    url(r'login/$', 'login', name='base_login'),
    url(r'logout/$', 'logout', name='base_logout'),
    url(r'^$', 'dashboard', name='base_dashboard'),
)
