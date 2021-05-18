from werkzeug.utils import redirect
from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.user import User
from flask_bcrypt import Bcrypt
#import new model of 'messages' when created and ready

bcrypt = Bcrypt(app)


@app.route('/')
def index():
    return render_template('index.html')



@app.route('/register', methods=['POST'])
def register_user():
    data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'email': request.form['email'],
        'password': request.form['password'],
        'confirm_password': request.form['confirm_password']
    }
    
    valid = User.validate_registration(data)
    if valid:
        User.create_user(data)
        flash('Account created successfully! Please login now.')
    return redirect('/')



@app.route('/login', methods=['POST'])
def login_user():
    data = {
        'email': request.form['email']
    }
    user = User.get_user_by_email(data)
    if user == None:
        flash('Email or Password is invalid!')
        return redirect('/')
    
    if not bcrypt.check_password_hash(user.password, request.form['password']):
        flash('Email or Password is incorrect!')
        return redirect('/')
    
    else:
        session['user_id'] = user.id
        session['email'] = user.email
        session['first_name'] = user.first_name
        session['last_name'] = user.last_name
        session['logged_in'] = True
        
        return redirect('/wall')


@app.route('/wall')
def login_success():
    try:
        if session['logged_in'] == True:
            return render_template('wall.html')
        else:
            session.clear()
            flash('You must be logged in to enter this website.')
            return redirect('/')
    except:
        session.clear()
        flash('You must be logged in to enter this website.')
        return redirect('/')



@app.route('/logout')
def logout():
    session.clear()
    flash('You have been signed out successfully.')
    return redirect('/')