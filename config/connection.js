

var mysql = require('mysql');

var connection = mysql.createConnection({
    port: 3306,
    host: "lh40lg7qyub2umdvb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user:"m77ycu343o2d33cl",
    password: "dkey2j2axk3vubga",
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