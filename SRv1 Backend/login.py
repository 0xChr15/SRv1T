from flask import Flask, request, jsonify
from werkzeug.security import check_password_hash, generate_password_hash

# This is a stand-in for your database
# In a real application, you would replace this with actual database calls
users = {
    "testuser": generate_password_hash("testpassword")
}

app = Flask(__name__)

@app.route('/your-login-endpoint', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'isValid': False, 'message': 'Missing username or password.'}), 400

    # In a real application, replace this with a database call
    if username in users:
        # Verify the password using the hash stored in the database
        if check_password_hash(users[username], password):
            return jsonify({'isValid': True}), 200
        else:
            return jsonify({'isValid': False, 'message': 'Incorrect password.'}), 400
    else:
        return jsonify({'isValid': False, 'message': 'Username does not exist.'}), 400

if __name__ == '__main__':
    app.run(debug=True)
