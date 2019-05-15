# Author: Micah Weiberg
# Version: 05-15-19
# Class that imports render_template to run on a web-page, works as a View class for MVC
from flask import render_template, request
from flask_classy import FlaskView, route


class TestView(FlaskView):
    # Method that initially renders the index.html class
    @route('/')
    def index(self):
        # Render HTML with 'index.html' to initialize the chessboard
        return render_template('index.html', **locals())

    # Method for the POST request from buttons.js
    @route('/buttonClick', methods=['post'])
    def click(self):
        # Set data equal to the value for 'clicked' from buttons.js
        data = request.form.get('clicked')
        # Render HTML with 'board.html' and colors dependent on whether
        # data = 'true' or 'false', allowing the board to change colors
        return render_template('board.html', data=data)
