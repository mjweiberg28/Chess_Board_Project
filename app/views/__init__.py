# Author: Micah Weiberg
# Version: 04-15-19
# Class that imports render_template to run on a web-page, works as a View class for MVC
from flask import render_template
from flask_classy import FlaskView, route


class TestView(FlaskView):

    def index(self):
        return render_template('index.html', **locals())
