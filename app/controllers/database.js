const mysql = require('mysql')

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  });
  
exports.connectDB = db.connect((err) => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log('Database connected');
});

// Create table
exports.createTable = async (req, res) => {
    const dr = "DROP TABLE IF EXISTS users;";
    let query = 'DROP TABLE IF EXISTS users; CREATE TABLE `users` (id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, name VARCHAR(255), address VARCHAR(255))';

    return await db.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }
        console.log("users: ", res);
        return res;
    });
}

async function allUsers(params) {
    const rows = await db.query({
        sql: 'SELECT * FROM users;',
        timeout: 40000,
    });
    return rows;
}

// Get users
exports.getUsers = async (req, result) => {
    let query = "SELECT * FROM users";

    const de = await db.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }
        console.log("tutorials: ", res);
        return res;
    });
    return de;
};

// Insert into users
exports.insertIntoUsers = async (req, result) => {
    let query = "INSERT INTO users (first_name, last_name) VALUES ('Company Inc', 'Highway 37')";

    return await db.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }
        console.log("users: ", res);
        return res;
    });
};
