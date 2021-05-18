from werkzeug.utils import redirect
from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.user import User
from flask_app.models.message import Message
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
    if "logged_in" in session:
        data = {
            'receive_id': session['user_id']
        }
        return render_template('wall.html', messages = Message.get_user_messages(data), users = User.get_all(data))
        
    else:
        session.clear()
        flash('You must be logged in to enter this website.')
        return redirect('/')


@app.route('/send/<int:id>', methods=['POST'])
def send(id):
    data = {
        'receive_id': id,
        'send_id': session['user_id'],
        'content': request.form['content']
    }
    if len(request.form['content']) < 5 or len(request.form['content']) > 200:
        flash('Invalid message length. (5 - 200 characters only.)')
        return redirect('/wall')
    else:
        flash('Message sent successfully!')
        Message.send(data)
        return redirect('/wall')


## DANGER WHEN EDITING - DESTROY ##
@app.route('/destroy/<int:id>', methods=['POST'])
def destroy(id):
    data = {
        'id': id
    }
    Message.destroy(data)
    return redirect('/wall')
## DAT BOI DANGEROUS ##


@app.route('/logout')
def logout():
    session.clear()
    flash('You have been signed out successfully.')
    return redirect('/')