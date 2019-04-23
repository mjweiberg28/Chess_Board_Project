# Author: Micah Weiberg
# Version: 04-15-19
# Class that imports Flask to run the app
from flask import Flask
from app.views import TestView

app = Flask(__name__)
# app.config.from_object('config')

TestView.register(app, route_base='/')
