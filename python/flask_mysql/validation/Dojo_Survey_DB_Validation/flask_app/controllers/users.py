from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.config.mysqlconnection import connectToMySQL

from flask_app.models.user import User



@app.route('/')
def index():
    return render_template("index.html")

@app.route('/result', methods=['POST'])
def create_user():
    # print("Got Post Info")
    # print(request.form)
    # name = request.form['name']
    # location = request.form['location']
    # language = request.form['language']
    # comments = request.form['comments']
    data = {
        'name': request.form['name'],
        'location': request.form['location'],
        'language': request.form['language'],
        'comments': request.form['comments']
    }
    print(data)
    if not User.validate_data(request.form):
        return redirect('/')
    elif User.validate_data(request.form) == True:
        User.save(data)
        return render_template("result.html", users = data ) 


