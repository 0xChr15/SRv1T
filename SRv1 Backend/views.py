from flask import render_template, redirect, request, url_for, flash
from flask_login import login_user
from werkzeug.security import check_password_hash
from . import db  # Here . indicates the current application package
from .models import User

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        confirm_password = request.form.get('confirm_password')

        # check if passwords match
        if password != confirm_password:
            flash('Passwords do not match!')
            return redirect(url_for('register'))

        # check if user already exists
        user = User.query.filter_by(username=username).first()
        if user:
            flash('Username already exists!')
            return redirect(url_for('register'))

        # create new user
        new_user = User(username=username)
        new_user.set_password(password)
        db.session.add(new_user)
        db.session.commit()
        flash('Account created successfully!')
        return redirect(url_for('login'))

    return render_template('register.html')  # Assuming you have a register.html in your templates folder

from flask import Flask, send_file

app = Flask(__name__)

@app.route('/generate_report/<filetype>')
def generate_report(filetype):
    # Placeholder logic for generating report based on filetype
    if filetype == 'docx':
        # Use python-docx or similar library to generate DOCX file
        pass
    elif filetype == 'pdf':
        # Use reportlab or similar library to generate PDF file
        pass
    elif filetype == 'xml':
        # Use xml.etree.ElementTree or similar library to generate XML file
        pass
    else:
        return 'Invalid file type!'

    # For now, just return a placeholder text file
    with open('report.txt', 'w') as f:
        f.write('This is a placeholder report.')

    return send_file('report.txt', as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask, send_file, jsonify
import pymysql.cursors
import os

# Connect to the database
connection = pymysql.connect(host='localhost',
                             user='user',
                             password='passwd',
                             db='db',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)

app = Flask(__name__)

def get_report_data():
    try:
        with connection.cursor() as cursor:
            # Select some data
            sql = "SELECT `id`, `name` FROM `table`"
            cursor.execute(sql)
            result = cursor.fetchall()
            return result
    except Exception as e:
        return str(e)

@app.route('/generate_report/<filetype>')
def generate_report(filetype):
    # Fetch data for the report
    data = get_report_data()

    # Placeholder logic for generating report based on filetype and data
    if filetype == 'docx':
        # Use python-docx or similar library to generate DOCX file
        pass
    elif filetype == 'pdf':
        # Use reportlab or similar library to generate PDF file
        pass
    elif filetype == 'xml':
        # Use xml.etree.ElementTree or similar library to generate XML file
        pass
    else:
        return jsonify({'error': 'Invalid file type!'}), 400

    # For now, just return a placeholder text file
    with open('report.txt', 'w') as f:
        f.write(str(data))

    return send_file('report.txt', as_attachment=True)

@app.errorhandler(500)
def internal_error(error):
    return "500 error"

@app.errorhandler(404)
def not_found(error):
    return "404 error", 404

if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask, render_template, jsonify, session
from models import db, Report
from sqlalchemy import create_engine
import pandas as pd

app = Flask(__name__)

# other routes...

@app.route('/generate_report')
def generate_report():
    user_id = session.get('user_id')  # get logged in user id
    engine = create_engine('mysql://user:pass@localhost/dbname')
    # query and report generation
    # save report metadata in database
    new_report = Report(user_id=user_id, filepath=report_filepath)
    db.session.add(new_report)
    db.session.commit()
    return 'Report successfully generated.'

@app.route('/view_reports')
def view_reports():
    user_id = session.get('user_id')  # get logged in user id
    reports = Report.query.filter_by(user_id=user_id).all()
    return jsonify([{'id': report.id, 'created_at': report.created_at, 'filepath': report.filepath} for report in reports])

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

@app.route('/generate_report')
def generate_report_page():
    return render_template('generateReport.html')
