from flask import render_template, request, redirect
from flask_app import app

from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.user import User

@app.route("/")
def index():
    #print(all_users)
    return render_template("index.html", all_users =User.index())


@app.route('/user/create')
def user_create():
    return render_template('user_create.html')


@app.route('/user/<id>/edit', methods=['POST'])
def user_edit(id):
    data = {
        'id': id
    }
    return render_template('users_edit.html', user=User.user_edit(data))


@app.route('/user/<id>', methods=['POST', 'GET'])
def user_view(id):
    data = {
        'id': id
    }
    return render_template('users_view.html', user=User.user_view(data))

@app.route('/create', methods=['POST'])
def create():
    data = {
        'fn': request.form['first_name'],
        'ln': request.form['last_name'],
        'em': request.form['email']
    }
    print(request.form)
    id=User.create(data)
    return redirect(f'/user/{id}')
# best method for inserting into string^^^ f"string

@app.route('/users/<int:id>/edit', methods=['POST'])
def edit(id):
    print(request.form)
    data = {
        'id': request.form['id'],
        'fn': request.form['first_name'],
        'ln': request.form['last_name'],
        'em': request.form['email']
    }
    User.actual_edit(data)
    return redirect(f'/user/{id}')



@app.route('/delete/<int:id>', methods=['POST'])
def delete(id):
    print(request.form)
    data = {
        'id': id
    }
    User.destroy(data)
    return redirect('/')


