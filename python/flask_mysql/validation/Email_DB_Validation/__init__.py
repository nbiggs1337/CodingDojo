from flask import Flask
from flask import request, render_template, session, flash

app = Flask(__name__)
app.secret_key = 'db_validation_email_form_thingy_#TheMemoryArcIsRealIDontRememberShitFromFridayOKMOVINGON'