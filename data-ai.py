# @Author: rajasekhar
# @Date:   2016-11-02T13:33:05+05:30
# @Last modified by:   rajasekhar
# @Last modified time: 2016-11-06T12:50:41+05:30



import os
import urllib
import json

from google.appengine.api import users
from google.appengine.ext import ndb
from google.appengine.api import mail
from google.appengine.ext import blobstore
from google.appengine.ext.webapp import blobstore_handlers
from google.appengine.ext.webapp.util import run_wsgi_app
from google.appengine.api import taskqueue

import webapp2
import jinja2

JINJA_ENV = jinja2.Environment(
    loader = jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions = ['jinja2.ext.autoescape'],
    autoescape = True
)

class MainPage(webapp2.RequestHandler):
    def get(self):
        # upload_url = blobstore.create_upload_url('/upload_resume')
        template_data = {
        #     'upload_url': upload_url
        }
        template = JINJA_ENV.get_template('index.html')
        self.response.write(template.render(template_data))

app = webapp2.WSGIApplication([
    ('/', MainPage),
    # ('/layers', LayerPage),
    # ('/contact', ContactMail)
], debug=True)
