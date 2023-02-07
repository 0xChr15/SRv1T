const jwt = require('jsonwebtoken');
const secret = 'secret';

function createToken(username, role, permissions) {
  const payload = { username, role, permissions };
  const options = { expiresIn: '1h' };
  const token = jwt.sign(payload, secret, options);
  return token;
}

function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    return null;
  }
}

function createRefreshToken(username, role, permissions) {
  const payload = { username, role, permissions };
  const options = { expiresIn: '7d' };
  const token = jwt.sign(payload, secret, options);
  return token;
}

function verifyRefreshToken(token)
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    return null
  }