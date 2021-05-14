from flask_app.config.mysqlconnection import connectToMySQL

class User:
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    @classmethod
    def index(cls):
        query = 'SELECT * FROM users;'
        results = connectToMySQL('users').query_db(query)
        users =[]
        for u in results:
            users.append(cls(u))
        return users


    @classmethod
    def create(cls,data):
        query = "INSERT INTO users (first_name, last_name, email, created_at, updated_at) VALUES (%(fn)s, %(ln)s, %(em)s, NOW(), NOW());"
        id =connectToMySQL('users').query_db(query, data)
        print('id',id)
        print('data',data)
        return id
    
    
    @classmethod
    def user_view(cls,data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        result = connectToMySQL('users').query_db(query,data)
        print(result)
        return cls(result[0])
    
    
    @classmethod
    def user_edit(cls,data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        result =connectToMySQL('users').query_db(query,data)
        print(result)
        return cls(result[0])
    
    
    @classmethod
    def actual_edit(cls,data):
        query = "UPDATE users SET first_name = %(fn)s, last_name = %(ln)s, email = %(em)s, updated_at = NOW() WHERE id = %(id)s"
        return connectToMySQL('users').query_db(query,data)
    
    
    @classmethod
    def destroy(cls,data):
        query = "DELETE FROM users WHERE id = %(id)s"
        return connectToMySQL('users').query_db(query,data)