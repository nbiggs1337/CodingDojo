from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 

class Email():
    
    def __init__(self, data):
        self.id = data['id']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    
    
    @classmethod
    def add(cls, data):
        query = 'INSERT INTO emails (email, created_at, updated_at) VALUES (%(email)s, NOW(), NOW());'
        connectToMySQL('emails').query_db(query, data)
    
    @classmethod
    def all_emails(cls):
        query = 'SELECT * FROM emails'
        return connectToMySQL('emails').query_db(query)
    
    
    
    
    @staticmethod
    def validate_email(email):
        is_valid = True
        if not EMAIL_REGEX.match(email['email']):
            flash('Try Again - Email Address is not valid!', 'email')
            is_valid = False
            return is_valid
        else :
            flash(f"The email address you entered ( {email['email']} ) is a VALID email address! Thank you!")
            return is_valid