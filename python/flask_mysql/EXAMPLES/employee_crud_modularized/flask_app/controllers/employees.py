from flask_app import app
from flask import render_template, redirect, request, session
from flask_app.config.mysqlconnection import connectToMySQL

from flask_app.models.employee import Employee

@app.route('/')
def index():
    connection = connectToMySQL('employee_demo') 
    departments = connection.query_db('SELECT * FROM departments;')
    return render_template('index.html', employees = Employee.get_all_employees(), departments = departments)

@app.route('/employees/create', methods=['POST'])
def create_employee():
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

    Employee.create_employee(data)
    
    return redirect('/')


@app.route('/delete/employee/<int:employee_id>')
def delete_employee(employee_id):
    data = {
        "id" : employee_id
    }
    Employee.destroy(data)
    return redirect('/')


@app.route('/edit/employee/<int:employee_id>')
def edit_employee(employee_id):
    data = {
        "id" : employee_id
    }
    return render_template('edit.html',edit_employee= Employee.get_by_id(data))

@app.route('/update/employee',methods=['POST'])
def update_employee():
    data ={
        "id": request.form['id'],
        "first_name": request.form['first_name'],
        "middle_name": request.form['middle_name'],
        "last_name": request.form['last_name'],
        "salary": request.form['salary'],
    }
    Employee.update_employee(data)
    return redirect('/')
