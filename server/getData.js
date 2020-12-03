const mysql = require("mysql");

const config = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pretzel'
})

const tabelName = "cards";


config.connect(err => {
    if (err) {
        console.log("MySQL error connected");
        throw err;
    }
    console.log("mysql is connected");
});


module.exports.getCards = function () {

    let sql = `SELECT * FROM ${tabelName}`

    return new Promise((res, rej) => {
        config.query(sql, (err, results) => {
            if (err) {
                console.log("GET CARDS \n", err.message);
                rej(err);
            }
            res(results);
        })
    })
}

module.exports.stop = function () {
    config.end(err => {
        if (err) {
            console.log("MySQL stoped error");
            throw err;
        }
        console.log("MySQL stoped");
    })
}
