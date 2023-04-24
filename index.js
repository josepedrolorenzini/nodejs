// console.log("welcome to nodejs.js");
var mysql = require('mysql');

var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"bookdb"
});

// console.log(conn);
conn.connect(function(err){
    if(err) throw err;
    conn.query("SELECT * from books" , function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });

})