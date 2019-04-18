# Author: Micah Weiberg
# Version: 04-15-19
# Class that imports Flask to run the app
from flask import Flask

app = Flask(__name__)
# app.config.from_object('config')

from app.views import TestView
TestView.register(app, route_base='/')
