//Function to encrypt data using AES-256
function encryptData(data) {
//Generate a random 256-bit key
    let key = crypto.randomBytes(32);
//Initialization Vector
    let iv = crypto.randomBytes(16);
//Create the cipher
    let cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
//Encrypt the data
    let encryptedData = cipher.update(data, 'utf8', 'hex');
    encryptedData += cipher.final('hex');
  //Return the encrypted data
    return {data: encryptedData, key: key, iv: iv};
}