const crypto = require('crypto').randomBytes(256).toString('hex');
module.exports = {
    uri: 'mongodb://127.0.0.1/test' + this.db,
    secret: crypto,
    db: 'angularioPOC'
}