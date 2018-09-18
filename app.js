//npm install cors
//npm install mongo
//npm install node
//npm install express
var common_data = require('./SERVER/data.json');
var express = require(common_data.required.express);
var app = express();
app.use(express.static(__dirname));
var cors = require(common_data.required.cors)
app.use(cors());

var Category = require('./SERVER/Category');
var login = require('./SERVER/login');

app.use('/login', login);
app.use('/Category', Category);

// app.listen(3000, '10.222.67.66', function () {
//     console.log("NRCM MAIN SERVER : 3000")
// });
app.listen(3000, function () {
    console.log(common_data.Messages.serverStartMsg);
});