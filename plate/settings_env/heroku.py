GOOGLE_OAUTH2_CLIENT_ID = 'YOUR_CLIENT_ID'
GOOGLE_OAUTH2_CLIENT_SECRET = 'YOUR_CLIENT_SECRET'

# Uncomment this for access to Gmail.
# GOOGLE_OAUTH_EXTRA_SCOPE = ['https://mail.google.com']

# This pulls the DB config from the heroku environment.

import dj_database_url

DATABASES = {
  'default': dj_database_url.config()
}

USE_COMPILED_JS = True
USE_COMPILED_CSS = True