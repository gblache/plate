from base.decorators import js_view
from django.contrib.auth import logout as auth_logout
from django.shortcuts import redirect
from django.contrib.auth.decorators import login_required
from django.core.urlresolvers import reverse


@js_view("login")
def login(request):
  '''The @js_view decorator tells the front end to load a 
  specific Backbone view for this endpoint.'''
  return {}


def logout(request):
  '''Force a POST to logout.'''
  if request.method == "POST":
    auth_logout(request)
  return redirect("base_dashboard")


@login_required
@js_view(None)
def dashboard(request):
  '''If you do not pass js_view a template nameit will defer to
  Backbone's internal routes for view loading.'''
  return {}