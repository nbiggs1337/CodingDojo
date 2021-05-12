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
    mysql.query_db(query, data)
    return redirect('/')






if __name__ == "__main__":
    app.run(debug=True)