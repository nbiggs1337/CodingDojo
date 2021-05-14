from flask import Flask, render_template, request, redirect
from mysqlconnection import connectToMySQL
# import the function that will return an instance of a connection
app = Flask(__name__)

@app.route('/')
def index():
    dojos = connectToMySQL('Dojos And Ninjas').query_db('SELECT * FROM dojos;')
    print(dojos)
    return render_template('index.html', dojos=dojos)

@app.route('/newdojo', methods=['POST'])
def newdojo():
    print(request.form)
    query = "INSERT INTO dojos (name, created_at, updated_at) VALUES (%(name)s, NOW(), NOW());"
    data = {
        'name': request.form['name']
    }
    connectToMySQL('Dojos And Ninjas').query_db(query,data)
    return redirect('/')

@app.route('/dojos/<id>', methods=['POST', 'GET'])
def dojo_id(id):
    all_ninjas = connectToMySQL('Dojos And Ninjas').query_db("SELECT * FROM dojos JOIN ninjas ON dojos.id  = ninjas.dojo_id WHERE dojo_id =" +id)
    print(all_ninjas)
    return render_template('dojos.html', all_ninjas=all_ninjas)

@app.route('/ninjas', methods=['POST', 'GET'])
def ninjas():
    dojos=connectToMySQL('Dojos And Ninjas').query_db("SELECT * FROM dojos;")
    print(dojos)
    return render_template('ninjas.html', dojos=dojos)


@app.route('/create_ninja', methods=['POST'])
def create():
    query = 'INSERT INTO ninjas (first_name, last_name, age, dojo_id, created_at, updated_at) VALUES (%(first_name)s, %(last_name)s, %(age)s, %(dojo_id)s, NOW(), NOW());'
    data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'age': request.form['age'],
        'dojo_id': request.form['dojo_id']
    }
    dojo_id = request.form['dojo_id']
    connectToMySQL('Dojos And Ninjas').query_db(query,data)
    return redirect('/dojos/'+str(dojo_id))



if __name__ == "__main__":
    app.run(debug=True)
