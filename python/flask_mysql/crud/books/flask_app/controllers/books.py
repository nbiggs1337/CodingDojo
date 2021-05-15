from flask import render_template, request, redirect
from flask_app import app

from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.book import Book
from flask_app.models.book import Author
from flask_app.models.book import Favorites


@app.route('/')
def index():
    return 'Go to /authors for content :)'


@app.route('/authors')
def authors():
    return render_template('authors.html', authors=Author.show_authors())

@app.route('/add_author', methods=['POST'])
def create_author():
    data = {
        'name': request.form['name']
    }
    print(request.form)
    id = Author.create_author(data)
    return redirect (f'authors/{id}')

@app.route('/authors/<id>')
def author_view(id):
    data = {
        'id': id
    }
    return render_template('author_view.html', author = Author.author_view(data), books = Book.show_books())



@app.route('/add_fav', methods=['POST'])
def add_fav():
    data = {
        'book_id': request.form['book_id'],
        'author_id': request.form['author_id']
    }
    print(data)
    Favorites.add_fav(data)
    return redirect('/authors/'+request.form['author_id'])






@app.route('/books')
def books():
    return render_template('books.html', books = Book.show_books())


@app.route('/add_book', methods=['POST'])
def add_book():
    data = {
        'title': request.form['title'],
        'num_of_pages': request.form['num_of_pages']
    }
    print(data)
    id = Book.add_book(data)
    return redirect('/books/'+str(id))



@app.route('/books/<id>')
def book_view(id):
    data = {
        'id': id
    }
    return render_template('book_view.html', book = Book.book_view(data), authors = Author.show_authors())


@app.route('/author_fav', methods=['POST'])
def author_fav():
    data = {
        'book_id': request.form['book_id'],
        'author_id': request.form['author_id']
    }
    print(data)
    Favorites.add_fav(data)
    return redirect('/books/'+request.form['book_id'])