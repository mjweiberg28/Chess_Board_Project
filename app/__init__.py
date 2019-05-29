# Author: Micah Weiberg
# Version: 05-28-19
# Class that imports Flask to run the app
from flask import Flask
from app.views import ChessView

app = Flask(__name__)

ChessView.register(app, route_base='/')
