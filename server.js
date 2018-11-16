var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');

var app = express()
app.use(bodyParser());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }));


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get("/api/getUser", function (req, res) {
    console.log("hi");
    data = {
        "name": "ABhishek",
        "age": 28
    }
    res.send(data);
})


app.listen(8080, function () {

    console.log('Example app listening on port 8080!')
})  