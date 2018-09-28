//npm install cors
//npm install node
//npm install express

var common_data = require('./SERVER/data.json');
var express = require(common_data.required.express);
var app = express();
app.use(express.static(__dirname));
var cors = require(common_data.required.cors)
app.use(cors());

var Cart = require('./SERVER/Cart');
var Category = require('./SERVER/Category');
var login = require('./SERVER/login');
var NewProduct = require('./SERVER/NewProduct');
var Store = require('./SERVER/Store');
var SubCategory = require('./SERVER/SubCategory');

var Data = require('./SERVER/Data');

app.use('/Cart', Cart);
app.use('/Category', Category);
app.use('/login', login);
app.use('/NewProduct', NewProduct);
app.use('/Store', Store);
app.use('/SubCategory', SubCategory);

app.use('/Data', Data);

// app.listen(3000, '10.222.67.66', function () {
//     console.log("R Enterprises MAIN SERVER : 3000")
// });

// WITHOUT PROMISE
app.get('/testWithoutPromise', function (req, res) {
    var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var sendData = [];
    var c = arrWithoutPromise(a);
    console.log("this is returned array to api", c);
    c.forEach(element => {
        sendData.push(element * element * element);
    });
    console.log("this is to be sent", sendData);
    res.send(sendData);
});

function arrWithoutPromise(a) {
    console.log("received array to funciton", a);
    var b = [];
    setTimeout(() => {
        a.forEach(element => {
            b.push(element * element);
        });
    }, 3000);
    console.log("this is resultArray in function", b);
    return b;
}
// WITHOUT PROMISE


// WITH PROMISE

app.get('/testWithPromise', function (req, res) {
    var a = [1, 2, 2, 4, 5, 6, 7, 8, 9, 10];
    // var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var sendData = [];
    var c = arrwithpromise(a)
        .then((result) => {
            console.log("this is returned array to api", result);
            result.forEach(element => {
                sendData.push(element * element * element);
            });
            console.log("this is to be sent", sendData);
            res.send(sendData);
        })
        .catch((err) => {
            console.log("this is returned array to api", err);
            err.forEach(element => {
                sendData.push(element * element * element);
            });
            console.log("this is to be sent", sendData);
            res.send(sendData);
        })
});

function arrwithpromise(a) {
    console.log("received array to funciton", a);
    var b = [];
    var rejectArr = [2, 5, 6];
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            a.forEach(element => {
                b.push(element * element);
            });
            if (b[2] == 9) {
                resolve(b);
            }
            else {
                reject(rejectArr);
            }
        }, 3000);
    });
    return promise;
}

// WITH PROMISE

app.listen(3000, function () {
    console.log(common_data.Messages.serverStartMsg);
});
