from django.core.management.base import BaseCommand, CommandError
from django.conf import settings
import subprocess


class Command(BaseCommand):
    can_import_settings = True
    help = 'Compile less down to a single main.css.'

    def handle(self, *args, **options):
        command = "lessc %s/static/less/main.less > %s/static/build/css/main.css" % \
            (settings.SITE_ROOT, settings.SITE_ROOT)
        p = subprocess.Popen(command, shell=True, 
            stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
        for line in p.stdout.readlines():
            print line,
        p.wait()
        