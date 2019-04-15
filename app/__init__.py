from flask import Flask

app = Flask(__name__)
# app.config.from_object('config')

from app.views import TestView
TestView.register(app, route_base='/')
