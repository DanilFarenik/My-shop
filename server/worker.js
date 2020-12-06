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

app.post('/order', jsonParser, (req, res) => {
    data.postProducts(req.body)
        .then(response => {
            res.json(JSON.stringify(response))
        })
        .catch(err => res.json(err))

    console.log("body", req.body);
})


app.post('/postComment', jsonParser, (req, res) => {
    data.postComment(req.body)
        .then(response => {
            res.json(JSON.stringify(response))
        })
        .catch(err => res.json(err))

    console.log("body", req.body);
})

app.get('/card', (req, res) => {
    data.getCards()
        .then(cards => res.json(cards))
        .catch(err => res.json(err));
})

app.get('/comment', jsonParser, (req, res) => {
    data.getComment()
        .then(cards => res.json(cards))
        .catch(err => res.json(err));
})