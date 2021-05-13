from flask import Flask, render_template, request, redirect
from mysqlconnection import connectToMySQL
app = Flask(__name__)

@app.route("/")
def index():
    mysql = connectToMySQL('users')
    users = mysql.query_db('SELECT * FROM users;')
    print(users)
    return render_template("index.html", all_users = users)


@app.route('/user/create')
def user_create():
    return render_template('user_create.html')


@app.route('/user/<id>/edit', methods=['POST'])
def user_edit(id):
    mysql = connectToMySQL('users')
    users = mysql.query_db('SELECT * FROM users WHERE id ='+id)
    print(users)
    return render_template('users_edit.html', user=users[0] )


@app.route('/user/<id>', methods=['POST', 'GET'])
def user_view(id):
    mysql = connectToMySQL('users')
    users = mysql.query_db('SELECT * FROM users WHERE id ='+id)
    print(users)
    return render_template('users_view.html', user=users[0] )







@app.route('/create', methods=['POST'])
def create():
    print(request.form)
    query = "INSERT INTO users (first_name, last_name, email, created_at, updated_at) VALUES (%(fn)s, %(ln)s, %(em)s, NOW(), NOW());"
    data = {
        'fn': request.form['fname'],
        'ln': request.form['lname'],
        'em': request.form['email']
    }
    mysql = connectToMySQL('users')
    user_id=mysql.query_db(query, data)
    return redirect(f"/user/{user_id}")
# best method for inserting into string^^^ f"string

@app.route('/users/<int:id>/edit', methods=['POST'])
def edit(id):
    print(request.form)
    query = "UPDATE users SET first_name = %(fn)s, last_name = %(ln)s, email = %(em)s, updated_at = NOW() WHERE id = " +str(id)
    data = {
        'fn': request.form['fname'],
        'ln': request.form['lname'],
        'em': request.form['email']
    }
    mysql = connectToMySQL('users')
    mysql.query_db(query, data)
    return redirect('/user/'+str(id))



@app.route('/delete/<int:id>', methods=['POST'])
def delete(id):
    print(request.form)
    query = "DELETE FROM users WHERE id = "+str(id)
    data = {}
    mysql = connectToMySQL('users')
    mysql.query_db(query, data)
    return redirect('/')




if __name__ == "__main__":
    app.run(debug=True)