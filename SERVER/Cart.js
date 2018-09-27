
var express = require('express')
var router = express.Router()
var common_data = require('./data.json');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ encoded: false, extended: true })
app.use(bodyParser.urlencoded({ extended: true }));
var mongoFunctions = require('./mongoFunctions');
router.use(bodyParser.json());


router.get('/getCart', function (req, res) {
    var receivedData = mongoFunctions.handleData(0, 'Cart', { 'nameOfProduct': 1 })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
});

router.get('/getTotal', function (req, res) {
    var receivedData = mongoFunctions.handleData(0, 'Cart', {}, {}, {}, {}, { 'sellingPrice': 1, "_id": 0 })
        .then((result) => {
            var total = mongoFunctions.getTotal(result);
            console.log(total);
            res.send({ 'total': total });

        })
        .catch((err) => {
            res.send(err);
        });
});

router.post('/addCart', urlencodedParser, function (req, res) {
    var receivedData = mongoFunctions.handleData(4, 'Cart', {}, { $and: [{ 'category': req.body.category }, { 'subCategory': req.body.subCategory }, { 'nameOfProduct': req.body.nameOfProduct }] })
        .then(function (result) {
            if (result == 1) {
                var receivedData = mongoFunctions.handleData(5, 'Cart', {}, {},
                    { $inc: { 'quantity': 1, } },
                    {
                        'category': req.body.category,
                        'subCategory': req.body.subCategory,
                        'nameOfProduct': req.body.nameOfProduct
                    }
                )
                    .then(function (result) {
                        res.send(result);
                    })
                    .catch((err) => {
                        res.send(err);
                    });
            }
            else {
                req.body.quantity = 1;
                var receivedData = mongoFunctions.handleData(1, 'Cart', {}, {}, req.body, {})
                    .then(function (result) {
                        res.send(result);
                    })
                    .catch((err) => {
                        res.send(err);
                    });
            }
        })
        .catch((err) => {
            res.send(err);
        });
});

router.delete('/deleteCart/:id', function (req, res) {
    var receivedData = mongoFunctions.handleData(2, 'Cart', {}, {}, {}, req.params.id)
        .then(function (result) {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
});

router.delete('/deleteCartFull', function (req, res) {
    var receivedData = mongoFunctions.handleData(6, 'Cart', {}, {}, {})
        .then(function (result) {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
});

router.use(bodyParser.json());
router.put('/updateCart', urlencodedParser, function (req, res) {
    var receivedData = mongoFunctions.handleData(3, 'Cart', {}, {},
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