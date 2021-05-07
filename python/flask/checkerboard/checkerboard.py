from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def landing():
    x=int(8/2)
    y= int(8/2)
    return render_template("index.html",x=x,y=y)

@app.route("/<x>")
def oneVar(x):
    x= int(x)/2
    y= int(8/2)
    return render_template("index.html",x= int(x),y=y)

@app.route("/<x>/<y>")
def twoVar(x, y):
    x= int(x)/2
    y= int(y)/2
    return render_template("index.html",x= int(x),y= int(y))

@app.route("/<x>/<y>/<color0>/<color1>")
def twoColor(x, y, color0, color1):
    x= int(x)/2
    y= int(y)/2
    return render_template("index.html",x= int(x),y= int(y), color0 = color0, color1=color1)






if __name__=="__main__":
    app.run(debug=True)