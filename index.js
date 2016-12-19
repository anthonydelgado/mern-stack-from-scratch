const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    // res.send('Hello World!');
    res.sendFile('/public/index.html');
});

app.listen(process.env.PORT || '3000', function () {
    console.log('Example app listening on port 3000!')
});