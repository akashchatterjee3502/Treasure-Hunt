from flask import Flask, render_template, request, redirect, url_for, session
import pymysql
from re import match
from key import admin_id, secret_key

app = Flask(__name__)
connection = pymysql.connect(host='localhost',
                             user='root',
                             password='akash',
                             db='nodejs',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)

app.secret_key = secret_key
treasure, deadend, time_taken = 0, 0, 0

@app.route('/')
@app.route('/templates/index.html')
def index():
    return render_template('index.html', admin=admin_id[0])

@app.route('/templates/login.html', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        name = request.form['name']
        password = request.form['password']

        password_regex = r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
        if not match(password_regex, password):
            return render_template('login.html', error="Invalid username or password")
        
        with connection.cursor() as cur:
            cur.execute("SELECT * FROM user WHERE (email=%s OR username=%s) AND pwd=%s", (name, name, password))
            user = cur.fetchone()
        
        if not user:
            return render_template('login.html', error="Invalid username or password")

        if (name == admin_id[0] or name == admin_id[1]) and password == admin_id[2]:
            session['user_id'] = name
            return redirect(url_for('admin'))
        
        session['user_id'] = name
        return render_template('themes.html', admin=admin_id[0], username=user['username'], treasure=user['treasure'], deadend=user['deadend'])
    
    else:
        return render_template('login.html')

@app.route('/templates/register.html', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']
        confirmpassword = request.form['confirmPassword']

        email_regex = r'^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$'
        username_regex = r'^[a-zA-Z][a-zA-Z0-9]*$'
        password_regex = r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"

        
        if not match(username_regex, username):
            return render_template('register.html', error1='Write the username in correct format')
        if not match(email_regex, email):
            return render_template('register.html', error2='Write the email in correct format')
        if not match(password_regex, password):
            return render_template('register.html', error3='Write the password in correct format')
        if password != confirmpassword:
            return render_template('register.html', error4="Password didn't matched")
        
        with connection.cursor() as cur:
            cur.execute('SELECT * from user WHERE email=%s OR Username=%s', (email, password))
            if cur.fetchone():
                return render_template('register.html', error1='User is already registered')

        with connection.cursor() as cur:
            cur.execute("INSERT INTO user (username, email, pwd) VALUES (%s, %s, %s)", (username, email, password))
            connection.commit()

        session['user_id'] = username
        return render_template('themes.html', admin=admin_id[0])
    else:
        return render_template('register.html')

@app.route('/admin')
def admin():
    user_id = session.get('user_id')
    if not user_id or user_id != admin_id[0] or user_id != admin_id[1]:
        render_template('login.html')

    with connection.cursor() as cur:
        cur.execute(f"SELECT username, email, treasure, deadend, totaltime from user WHERE username <> '{admin_id[0]}'")
        users = cur.fetchall()

    return render_template('admin.html', admin=admin_id[0], users=users)

@app.route('/profile')
def profile():
    user_id = session.get('user_id', 0)
    if not user_id:
        return render_template('login.html')
    
    with connection.cursor() as cur:
        cur.execute('SELECT * FROM user where email=%s or username=%s', (user_id, user_id))
        user = cur.fetchone()
    
    return render_template('profile.html',admin=admin_id[0], username=user['username'], email=user['email'], treasure=user['treasure'], deadend=user['deadend'], total_time=user['totaltime'])

@app.route('/logout')
def logout():
    session.pop('user_id', None)
    return redirect(url_for('index'))

@app.route('/templates/themes.html')
def themes():
    user_id = session.get('user_id', 0)
    if not user_id:
        return redirect(url_for('login'))
    
    return render_template('themes.html', admin=admin_id[0])

@app.route('/templates/game.html')
def game():
    user_id = session.get('user_id', 0)
    if not user_id:
        return render_template('login.html')
    
    return render_template('game.html', admin=admin_id[0])

@app.route('/dashboard', methods=['GET', 'POST'])
def dashboard():
    user_id = session.get('user_id', 0)
    if not user_id:
        return render_template('login.html')
    
    global treasure, deadend, time_taken
    if request.method == 'POST':
        data = request.get_json()
        treasure = data.get('treasure')
        deadend = data.get('deadend')
        time_taken = data.get('timeTaken')
        with connection.cursor() as cur:
            cur.execute(f"UPDATE user SET treasure = treasure + {treasure}, deadend = deadend + {deadend}, totaltime = totaltime + {int(time_taken)} WHERE username='{user_id}' or email='{user_id}'")
            connection.commit()      
        return render_template('dashboard.html', admin=admin_id[0], username=user_id, treasure=treasure, deadend=deadend, total_time=time_taken)

    if request.method == 'GET':
        return render_template('dashboard.html', admin=admin_id[0], username=user_id, treasure=treasure, deadend=deadend, total_time=time_taken)

@app.route('/leaderboard')
def leaderboard():
    with connection.cursor() as cur:
        cur.execute(f"SELECT username, treasure, deadend, totaltime from user WHERE username <> '{admin_id[0]}'")
        users = cur.fetchall()
    
    users.sort(key = lambda x: (-x['treasure'], x['totaltime']))
    return render_template('leaderboard.html', admin=admin_id[0], users=users)

if __name__ == '__main__':
    app.run(debug=False,host='0.0.0.0')
