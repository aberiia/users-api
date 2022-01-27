const sqlite3 = require("sqlite3").verbose();
const dbPath = process.env.PATH_TO_DB;
let db = new sqlite3.Database(dbPath);

module.exports = db;
