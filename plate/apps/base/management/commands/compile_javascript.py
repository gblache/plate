from django.core.management.base import BaseCommand, CommandError
from django.conf import settings
import subprocess


class Command(BaseCommand):
    can_import_settings = True
    help = 'Compile .coffee to .js and run the r.js compiler.'

    def handle(self, *args, **options):
        command = "coffee -o %s/static/js/ -c %s/static/coffee/" % \
            (settings.SITE_ROOT, settings.SITE_ROOT)
        self.run(command)

        command = "node %s/../vendor/require-2.1.4/r.js -o %s/build.plate.js" % \
            (settings.SITE_ROOT, settings.SITE_ROOT)
        self.run(command)

    def run(self, command):
        p = subprocess.Popen(command, shell=True, 
            stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
        for line in p.stdout.readlines():
            print line,
        return p.wait()