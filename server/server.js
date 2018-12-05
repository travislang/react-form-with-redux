const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

const snacksData = ['testing'];

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

app.get('/snacks', ( req, res ) => {
    res.send( snacksData )
});

app.post('/snacks', ( req, res ) => {
    snacksData.push(req.body.snack);
    res.sendStatus( 201 );
})

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});