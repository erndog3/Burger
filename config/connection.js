

var mysql = require('mysql');

var connection = mysql.createConnection({
    port: 3306,
    host: "l7cup2om0gngra77.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user:"oet0zlivuugu71b9",
    password: "qcymynrrdz70xx1o",
    database: "burgers_db"
});

connection.connect(function(err){
    if(err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as ID#: " + connection.threadId);
});
module.exports = connection;