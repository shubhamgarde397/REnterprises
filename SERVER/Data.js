
var express = require('express')
var router = express.Router()
var common_data = require('./data.json');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ encoded: false, extended: true })
app.use(bodyParser.urlencoded({ extended: true }));
var mongoFunctions = require('./mongoFunctions');
router.use(bodyParser.json());


router.get('/getData', function (req, res) {
    var receivedData = mongoFunctions.handleData(0, 'Data')
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
});

router.post('/addData', urlencodedParser, function (req, res) {
    var receivedData = mongoFunctions.handleData(1, 'Data', {}, {}, req.body, {})
        .then(function (result) {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
});


module.exports = router