from flask import Flask
app = Flask(__name__)


@app.route('/')
def hello_world():
    return "Hello World!!!! Python is coooool :)"

@app.route('/dojo')
def dojo():
    return 'Dojo!'

@app.route('/say/<name>')
def say(name):
    return f"Greetings {name}. Nice to see you round deez partz."

@app.route('/repeat/<num>/<word>')
def repeat(num, word):
    return f"{word} "*int(num)


@app.errorhandler(404)
def page_not_found(e):
    return "Sorry! No response, check URL and try again!"



if __name__=="__main__":
    app.run(debug=True)