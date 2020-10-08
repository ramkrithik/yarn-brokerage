from flask import Flask, render_template, request

app = Flask(__name__)
posts = [
    {
        'date': '7 OCT 2020',
        'content': "New Product"
    },
    {
        'date': '2 Sep 2020',
        'content': 'New Product'
    }
]
title = "hello"


@app.route('/')
@app.route('/home')
def home():
    return render_template("main.html")


@app.route('/updates')
def updates():
    return render_template("updates.html", posts=posts)


@app.route('/pricing')
def pricing():
    return render_template("pricing.html")


@app.route('/profile')
def profile():
    return render_template("profile.html")


@app.route('/login')
def login():
    return render_template("login.html")


@app.route('/register')
def register():
    return render_template("register.html")


@app.route('/order', methods=["POST", "GET"])
def order():
    return render_template("orders.html")


if __name__ == '__main__':
    app.run(debug=True)
