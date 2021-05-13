# install pymysql and, if necessary, pip install cryptography
from flask_app import app
from flask_app.controllers import employees

if __name__ == "__main__":
    app.run(debug = True)