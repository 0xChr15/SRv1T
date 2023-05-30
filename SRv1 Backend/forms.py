# In forms.py
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import DataRequired, Email
from flask import Flask, render_template
app = Flask(__name__)



class RegistrationForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])

# In your route handler
@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        # Process registration...
        pass
    return render_template('register.html', form=form)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()

