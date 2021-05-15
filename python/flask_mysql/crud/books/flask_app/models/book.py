from flask_app.config.mysqlconnection import connectToMySQL


class Book:
    def __init__(self, data):
        self.id = data['id']
        self.title = data['title']
        self.num_of_pages = data['num_of_pages']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    
    
    @classmethod
    def show_books(cls):
        query = 'SELECT * FROM books'
        results = connectToMySQL('books').query_db(query)
        books = []
        for b in results:
            books.append(cls(b))
        return books
    
    
    
    @classmethod
    def add_book(cls, data):
        query = 'INSERT INTO books (title, num_of_pages, created_at, updated_at) VALUES (%(title)s, %(num_of_pages)s, NOW(), NOW());'
        return connectToMySQL('books').query_db(query,data)
    
    
    @classmethod
    def book_view(cls, data):
        query = 'SELECT * FROM books LEFT JOIN favorites ON books.id = favorites.book_id LEFT JOIN authors on authors.id = favorites.author_id WHERE books.id = %(id)s;'
        result = connectToMySQL('books').query_db(query,data)
        return result




#Authors class:


class Author:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    
    @classmethod
    def show_authors(cls):
        query = 'SELECT * FROM authors'
        results = connectToMySQL('books').query_db(query)
        authors = []
        for a in results:
            authors.append(cls(a))
        print(results)
        return results
    
    
    @classmethod
    def create_author(cls, data):
        query = "INSERT INTO authors (name, created_at, updated_at) VALUES (%(name)s, NOW(), NOW());"
        return connectToMySQL('books').query_db(query,data)
    
    
    @classmethod
    def author_view(cls, data):
        query = 'SELECT * FROM authors LEFT JOIN favorites ON authors.id = favorites.author_id LEFT JOIN books on books.id = favorites.book_id WHERE authors.id = %(id)s ;'
        result = connectToMySQL('books').query_db(query,data)
        return result
    
    
    
    
    





# Favorties Class ++++

class Favorites:
    def __init__(self, data):
        self.author_id = data['author_id']
        self.book_id = data['book_id']
    
    
    @classmethod
    def add_fav(cls, data):
        query = 'INSERT INTO favorites (author_id, book_id) VALUES ( %(author_id)s, %(book_id)s);'
        id = connectToMySQL('books').query_db(query,data)
        print(id)
        return id