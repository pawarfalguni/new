let mysql = require('mysql');
let connection = mysql.createConnection({
    host: "localhost",
    port: "3001",
    user: "root",
    password: "12345",
    database: "mern8am",
    socketPath : '/var/run/mysqld/mysqld.sock'
});

connection.connect((err,con)=>{
    if(err)throw err;
        console.log('connected')
});

module.exports = connection;