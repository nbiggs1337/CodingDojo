from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.config.mysqlconnection import connectToMySQL

from flask_app.models.email import Email

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/add_email', methods=['POST'])
def add_email():
    data = {
        'email': request.form['email']
    }
    if not Email.validate_email(request.form):
        return redirect('/')
    else:
        Email.add(data)
        emails = Email.all_emails()
        return render_template('success.html', emails = emails)