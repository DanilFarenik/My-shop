const mysql = require("mysql");

const config = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pretzel'
})

const tabelNameCards = "cards";
const tableComment = "comments";
const tebleProduct = "products";

config.connect(err => {
    if (err) {
        console.log("MySQL error connected");
        throw err;
    }
    console.log("mysql is connected");
});

module.exports.getCards = function () {

    let sql = `SELECT * FROM ${tabelNameCards}`

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

module.exports.getComment = function () {
    let sql = `SELECT * FROM ${tableComment}`

    return new Promise((res, rej) => {
        config.query(sql, (err, results) => {
            if (err) {
                console.log("GET COMMENTS \n", err.message);
                rej(err);
            }
            res(results);
        })
    })
}

module.exports.postComment = function ({ text, name, date }) {
    let sql = `INSERT INTO \`comments\` (\`id\`, \`text\`, \`name\`, \`date\`) VALUES (NULL, '${text}', '${name}', '${date}');`

    return new Promise((res, rej) => {
        config.query(sql, (err, results) => {
            if (err) {
                console.log("GET COMMENTS \n", err.message);
                rej(err);
            }
            res(results);
        })
    })
}


module.exports.postProducts = function (prd) {

    let sql = `INSERT INTO \`products\` (\`id\`, \`fullName\`, \`tel\`, \`email\`, \`products\`) VALUES (NULL, '${prd[0].firstName + " " + prd[0].lastName}', '${prd[0].tel}', '${prd[0].email}',`

    if (prd.length != 1) {
        sql += `'${JSON.stringify(prd[1])}');`
    } else {
        sql += `'${prd[0].text}');`
    }

    return new Promise((res, rej) => {
        config.query(sql, (err, results) => {
            if (err) {
                console.log("GET COMMENTS \n", err.message);
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
