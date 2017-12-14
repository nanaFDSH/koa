const db = require('../db');

module.exports = db.defineModel('list', {
    id:db.ID,
    name: db.STRING(100),
    mobile: db.STRING(11),
    score: db.FLOAT(3),
    mathematics: db.FLOAT(3),
    chinese: db.FLOAT(3),
    english: db.FLOAT(3)
});