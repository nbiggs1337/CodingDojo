from flask import Flask
from flask import request, render_template, session, flash

app = Flask(__name__)
app.secret_key = 'modular >:)'