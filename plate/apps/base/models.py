from django.db import models
from django.contrib.auth.models import User

class UserMixin(object):

    def to_json(self):
        return {
            "id": self.id,
            "email": self.email,
            "logged_in": self.is_authenticated()
        }

User.__bases__ += (UserMixin,)