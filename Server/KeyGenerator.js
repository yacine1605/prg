const crypto = require('crypto');
const key = crypto.randomBytes(256).toString('hex');
console.log(key);
