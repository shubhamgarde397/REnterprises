
var express = require('express')
var router = express.Router()
var common_data = require('./data.json');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ encoded: false, extended: true })
app.use(bodyParser.urlencoded({ extended: true }));
var mongoFunctions = require('./mongoFunctions');
router.use(bodyParser.json());


router.get('/getCategory', function (req, res) {
    var receivedData = mongoFunctions.handleData(0, 'Category', { 'category': 1 })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
});

router.post('/addCategory', urlencodedParser, function (req, res) {
    var receivedData = mongoFunctions.handleData(1, 'Category', {}, {}, req.body, {})
        .then(function (result) {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
});

router.delete('/deleteCategory/:id', function (req, res) {
    var receivedData = mongoFunctions.handleData(2, 'Category', {}, {}, {}, req.params.id)
        .then(function (result) {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
});

router.use(bodyParser.json());
router.put('/updateCategory', urlencodedParser, function (req, res) {
    var receivedData = mongoFunctions.handleData(3, 'Category', {}, {},
        {
            'category': req.body.category,
        },
        req.body.id)
        .then(function (result) {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
});

module.exports = router