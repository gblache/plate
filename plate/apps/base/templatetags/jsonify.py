from django.core.serializers import serialize
from django.core.serializers.json import DjangoJSONEncoder
from django.db.models.query import QuerySet
from django.db.models import Model
from django.utils import simplejson
from django.template import Library
from django.utils.safestring import mark_safe

# From http://djangosnippets.org/snippets/201/

register = Library()

@register.filter()
def jsonify(object):
    '''I prefer to have each model implement its own to_json method for better
    ontrol over what attributes are dumped.'''
    if isinstance(object, Model):
        serialized_object = simplejson.dumps(object.to_json(), cls=DjangoJSONEncoder)
    elif isinstance(object, QuerySet):
        serialized_object = serialize('json', object, cls=DjangoJSONEncoder)
    else:
        serialized_object = simplejson.dumps(object, cls=DjangoJSONEncoder)
    return mark_safe(serialized_object)