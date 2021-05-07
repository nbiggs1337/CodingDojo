from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = 'a secret key'
# random_num = random.randint(1,100)

@app.route('/')
def index():
    if 'random_num' not in session:
        session['count'] = 0
        session['random_num'] = random.randint(1,100)
        print(session['random_num'])
    return render_template('index.html')


@app.route('/guess', methods=['POST'])
def guess():
    try:
        if session['random_num'] == int(request.form['guess']):
            session['response'] = 'correct'
            session['count'] +=1
            return redirect('/')
            
        elif session['random_num'] > int(request.form['guess']):
            session['response'] = 'low'
            session['count'] +=1
            return redirect('/')
        
        elif session['random_num'] < int(request.form['guess']):
            session['response'] = 'high'
            session['count'] +=1
            return redirect('/')
    except ValueError:
        session['response'] = 'invalid'
        return redirect('/')


@app.route('/reset')
def reset():
    session.clear()
    return redirect('/')

if __name__=='__main__':
    app.run(debug=True)