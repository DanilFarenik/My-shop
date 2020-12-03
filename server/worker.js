const express = require('express');
const app = express();

const jsonParser = express.json();

const data = require("./getData.js");


const pid = process.pid;
const port = 3000;

//------------------------------------------- Development ------------------------------------------- 

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {

        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});
//------------------------------------------- Development ------------------------------------------- 



app.listen(port, () => {
    console.log(`Server started \nLink http://localhost:${port} \nPid: ${pid} `);
});

app.get('/card', (req, res) => {
    console.log("Pid get ", pid, "\n");

    data.getCards()
        .then(cards => res.json(cards))
        .catch(err => res.json(err));
})

app.post('/order', jsonParser, (req, res) => {
    console.log("body", req.body);
    res.json("Ok")
    // console.log(req);

})


