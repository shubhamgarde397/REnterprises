var express = require('express')
var router = express.Router()
var common_data = require('./data.json');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ encoded: false, extended: true })
app.use(bodyParser.urlencoded({ extended: true }));
var mongoFunctions = require('./mongoFunctions');
router.use(bodyParser.json());


router.get('/getStore', function (req, res) {
    var receivedData = mongoFunctions.handleData(0, 'Store', { 'nameOfProduct': 1 })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
});


router.post('/addStore', urlencodedParser, function (req, res) {
    var receivedData = mongoFunctions.handleData(4, 'Store', {}, { $and: [{ 'category': req.body.category }, { 'subCategory': req.body.subCategory }, { 'nameOfProduct': req.body.nameOfProduct }] })
        .then(function (result) {
            if (result == 1) {
                var receivedData = mongoFunctions.handleData(5, 'Store', {}, {},
                    { $inc: { 'quantity': req.body.quantity, } },
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
                req.body.quant = 0;
                var receivedData = mongoFunctions.handleData(1, 'Store', {}, {}, req.body, {})
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

router.post('/deleteStore', function (req, res) {
    var receivedData = mongoFunctions.handleData(5, 'Store', {}, {},
        { $inc: { 'quantity': -(req.body.quantity), } },
        {
            'category': req.body.category,
            'subCategory': req.body.subCategory,
            'nameOfProduct': req.body.nameOfProduct
        })
        .then(function (result) {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
});

router.post('/deleteFinalStore', function (req, res) {
    var receivedData = mongoFunctions.handleData(0, 'Cart', { 'nameOfProduct': 1 })
        .then((result) => {
            result.forEach(element => {
                var receivedData = mongoFunctions.deleteQuantityFromStore(element);
            });

        })
        .catch((err) => {
            res.send(err);
        });
});

module.exports = router