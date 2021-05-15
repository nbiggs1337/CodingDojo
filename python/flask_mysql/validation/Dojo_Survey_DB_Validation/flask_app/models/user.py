from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash


class User():
    
    
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.language = data['language']
        self.comments = data['comments']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    @classmethod
    def save(cls, data):
        query = 'INSERT INTO users (name, location, language, comments, created_at, updated_at) VALUES (%(name)s, %(location)s, %(language)s,%(comments)s, NOW(), NOW());'
        
        connectToMySQL('Dojo_Survey').query_db(query, data)
    
    
    
    
    
    
    
    @staticmethod
    def validate_data(user):
        is_valid = True
        if len(user['name']) < 2 or len(user['name']) > 45:
            flash('Try Again. Name must be between 2 - 45 characters.')
            is_valid = False
        if len(user['location']) > 45 or len(user['location']) < 3:
            flash('Try Again. Location must be valid Dojo location. ')
            is_valid = False
        if len(user['language']) > 45 or len(user['language']) < 1:
            flash('Try Again. Language must be between 1 - 45 characters.')
            is_valid = False
        if len(user['comments']) > 255:
            flash('Please shorten comments and try again. (Max legnth is 255 characters.')
            is_valid = False
        if len(user['comments']) < 2:
            flash('Please leave a comment.')
            is_valid = False
        return is_valid