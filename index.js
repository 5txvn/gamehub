const express = require('express');
const app = express();

const games = require('./games.json');

Object.entries(games).forEach(game => {
    app.get(`/${game[0]}`, (req, res) => {
        res.send(`<body style="margin:0;"><iframe width="100%" height="100%" style="border-style:none;" src="${game[1]}"></iframe></body>`)
    });
})

app.listen(3000)