const db = require('../db');

module.exports = db.defineModel('users', {
    id:db.ID,
    name: db.STRING(100),
    password: db.STRING(11)
});