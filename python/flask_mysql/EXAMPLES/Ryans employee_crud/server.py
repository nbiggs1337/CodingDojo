# install pymysql and, if necessary, pip install cryptography

from flask import Flask, render_template, request, redirect, session
from mysqlconnection import connectToMySQL

app = Flask(__name__)
app.secret_key = 'time to demo SQL connections'


@app.route('/')
def index():
    connection = connectToMySQL('employee_demo')    
    employees = connection.query_db('SELECT * FROM employees;')
    connection = connectToMySQL('employee_demo') 
    departments = connection.query_db('SELECT * FROM departments;')
    return render_template('index.html', employees = employees, departments = departments)

@app.route('/employees/create', methods=['POST'])
def create_employee():
    connection = connectToMySQL('employee_demo')
    
    query = "INSERT INTO employees (first_name, middle_name, last_name, salary, department_id, created_at, updated_at) VALUES (%(first_name)s, %(middle_name)s, %(last_name)s, %(salary)s, %(department_id)s, NOW(), NOW());"
    data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'salary': request.form['salary'],
        'department_id': request.form['department_id']
    }
    if request.form['middle_name'] == '':
        data['middle_name'] = None
    else:
        data['middle_name'] = request.form['middle_name']

    connection.query_db(query, data)
    
    return redirect('/')

if __name__ == "__main__":
    app.run(debug = True)