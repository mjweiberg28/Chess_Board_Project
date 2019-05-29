# Author: Micah Weiberg
# Version: 05-29-19
# Class that renders the web-page using Flask, works as a View class for MVC
from flask import render_template, request
from flask_classy import FlaskView, route


class ChessView(FlaskView):
    # Method that initially renders the index.html class
    @route('/')
    def index(self):
        # color = top left color in chessboard grid
        # alt_color = the alternating color with the top left color
        color = 'white'
        alt_color = 'black'
        return render_template('index.html', color=color, alt_color=alt_color)

    # Method for the POST request from buttons.js
    @route('/buttonClick', methods=['post'])
    def click(self):
        # Set color equal to the value for 'TL-color' from buttons.js
        color = request.form.get('TL-color')
        # Set alternating colors of chessboard
        if color == 'black':
            alt_color = 'white'
        else:
            alt_color = 'black'
        # Render 'board.html' with chessboard colors dependent on whether
        # color = 'black' or 'white', allowing the board to change colors
        return render_template('board.html', color=color, alt_color=alt_color)
