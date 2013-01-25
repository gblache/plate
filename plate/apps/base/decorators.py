from django.shortcuts import render_to_response, redirect
from django.template import RequestContext
from django.conf import settings


def js_view(view_name, *args, **kwargs):
    def __renderer__(func):
        def __inner__(request, *args, **kwargs):
            output = func(request, *args, **kwargs)
            template_data = {"output": output, "settings": settings}
            if view_name:
                template_data["view_name"] = view_name
            return render_to_response("application.html", template_data, 
                RequestContext(request))
        __inner__.__name__ = func.__name__
        __inner__.__module__ = func.__module__
        __inner__.__doc__ = func.__doc__
        return __inner__
    return __renderer__