from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re
from flask_app import app
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 



class User():
    
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    
    @classmethod
    def create_user(cls, data):
        
        hashed_pw = bcrypt.generate_password_hash(data['password'])
        data['hashed_pw'] = hashed_pw
        
        connection = connectToMySQL('private_wall')
        query = 'INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(hashed_pw)s, NOW(), NOW());'
        new_user_id = connection.query_db(query, data)
        
        return new_user_id
    
    
    @classmethod
    def get_user_by_email(cls, data):
        
        query = 'SELECT * FROM users WHERE email = %(email)s;'
        result = connectToMySQL('private_wall').query_db(query, data)
        
        if len(result) <= 0:
            return None
        
        else:
            print(User(result[0]))
            return User(result[0])
    
    
    @classmethod
    def get_all(cls, data):
        query = 'SELECT * FROM users WHERE id != %(receive_id)s;'
        return connectToMySQL('private_wall').query_db(query, data)
    
    
    
    
    
    
    
    
    
    
    @staticmethod
    def validate_registration(data):
        is_valid = True
        if len(data['first_name']) < 2 or len(data['first_name']) > 45:
            is_valid = False
            flash('Try Again - Name should be between 2 - 45 characters.')
        
        if len(data['last_name']) < 2 or len(data['last_name']) > 45:
            is_valid = False
            flash('Try Again - Last name should be between 2 - 60 characters.')
        
        if not EMAIL_REGEX.match(data['email']): 
            is_valid = False
            flash("Try Again - Invalid email address!")
        
        query = 'SELECT * FROM users WHERE email = %(email)s;' #validate if email is in use
        result = connectToMySQL('private_wall').query_db(query, data)
        if len(result) != 0:
            is_valid = False
            flash('Error: Please sign in.')
        
        if len(data['password']) < 8:
            is_valid = False
            flash('Invalid Password - Try Again - Password must be 8+ characters.')
        
        if data['password'] != data['confirm_password']:
            is_valid = False
            flash('Passwords do not match. Please Try Again.')
        
        return is_valid
    
    
    