from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re
from flask_app import app
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)



class Message():
    
    def __init__(self, data):
        self.id = data['id']
        self.content = data['content']
        self.send_id = data['send_id']
        self.receive_id = data['receive_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    
    
    @classmethod
    def get_user_messages(cls, data):
        
        query = 'SELECT * FROM messages JOIN users ON users.id = messages.send_id WHERE receive_id = %(receive_id)s;'
        return connectToMySQL('private_wall').query_db(query, data)
    
    
    @classmethod
    def send(cls, data):
        query = "INSERT INTO messages (content, send_id, receive_id, created_at, updated_at) VALUES (%(content)s, %(send_id)s, %(receive_id)s, NOW(), NOW());"
        return connectToMySQL('private_wall').query_db(query, data)
    
    
    ## DELETE METHOD - CAUTION ##
    @classmethod
    def destroy(cls, data):
        query = "DELETE FROM messages WHERE id = %(id)s;"
        return connectToMySQL('private_wall').query_db(query, data)