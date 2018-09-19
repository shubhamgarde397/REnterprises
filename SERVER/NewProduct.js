var express = require('express')
var router = express.Router()
var common_data = require('./data.json');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ encoded: false, extended: true })
app.use(bodyParser.urlencoded({ extended: true }));
var mongoFunctions = require('./mongoFunctions');
router.use(bodyParser.json());


router.get('/getNewProduct', function (req, res) {
    var receivedData = mongoFunctions.handleData(0, 'NewProduct', { 'nameOfProduct': 1 })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
});


router.post('/addNewProduct', urlencodedParser, function (req, res) {
    var receivedData = mongoFunctions.handleData(1, 'NewProduct', {}, {}, req.body, {})
        .then(function (result) {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
});

router.delete('/delteNewProduct/:id', function (req, res) {
    var receivedData = mongoFunctions.handleData(2, 'NewProduct', {}, {}, {}, req.params.id)
        .then(function (result) {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
});

router.use(bodyParser.json());
router.put('/updateSubCategory', urlencodedParser, function (req, res) {
    console.log("hi");
    var receivedData = mongoFunctions.handleData(3, 'SubCategory', {}, {},
        {
            'category': req.body.category,
            'subCategory': req.body.subCategory,
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