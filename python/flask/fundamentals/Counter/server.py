from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'annnnythingithinkitssupposedtobeRNGandencryptedbutok'

@app.route('/')
def index():
    if "visits" not in session:
        session['visits'] = 0
    
    return render_template('index.html')



@app.route("/count")
def count():
    session['visits'] += 1
    return redirect ("/")


@app.route("/reset")
def reset():
    session.pop("visits")
    return redirect("/")



if __name__ == '__main__':
    app.run(debug = True)
