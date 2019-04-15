from flask import render_template
from flask_classy import FlaskView, route


class TestView(FlaskView):

    def index(self):
        return render_template('index.html', **locals())
