# Author: Micah Weiberg
# Version: 04-25-19
# Class that imports render_template to run on a web-page, works as a View class for MVC
from flask import render_template, request
from flask_classy import FlaskView, route


class TestView(FlaskView):

    @route('/')
    def index(self):
        return render_template('index.html', **locals())

    @route('/buttonClick', methods=['post'])
    def clickButton(self):
        return 'Chessboard color has been changed!'

