var express = require('express')
var router = express.Router()
var common_data = require('./data.json');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ encoded: false, extended: true })
app.use(bodyParser.urlencoded({ extended: true }));
var mongodb = require(common_data.required.mongodb);
var mongoClient = mongodb.MongoClient;
const url = common_data.required.url;
const dbName = common_data.database.dbname;
var mongoFunctions = require('./mongoFunctions');
router.use(bodyParser.json());

router.get('/testlogin', function (req, res) {
    res.send("hi");
});
router.get('/getLoginDetailsbyid/:username/:password', function (req, res) {
    var arr = { status: false };
    var status = false;
    mongoClient.connect(url, function (err, client) {
        if (err) {
            console.log(common_data.Messages.error, err);
        }
        else {
            var db = client.db(dbName);
            var c = db.collection(common_data.table_name.login).find({ $and: [{ "username": req.params.username }, { "password": req.params.password }] }).count();
            console.log(dbName + "." + common_data.table_name.login + ".find({ $and: [{ username:" + req.params.username + " }, { password:" + req.params.password + " }] }).count()");
            c.then(function (result) {
                console.log(result);
                if (result == 0) {
                    return res.json(status);
                }
                else {
                    status = true;
                    return res.json(status);
                }
                client.close();
            })
        }
    });
});

router.post('/addnewuserdata', urlencodedParser, function (req, res) {
    var receivedData = mongoFunctions.handleData(1, common_data.table_name.login, {}, {}, req.body, {})
        .then(function (result) {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
});

module.exports = router