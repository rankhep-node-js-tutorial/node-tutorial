var express = require('express');   //npm install --save express
var ejs = require('ejs');   //npm install ejs
var bodyParser = require('body-parser');    //npm install body-parser
var app = express();
app.set('view engine', 'html');
app.set("views", './views');
app.engine('html', require('ejs').renderFile);

app.use(express.static('public'));   //정적파일 서비스 public이라는 디렉토리에서 서비

app.use(bodyParser.urlencoded({extended: false}));  //body-parser을 이용하기 위한코드

app.get('/', function (req, res) {
    res.send("Oh!")
});

app.get('/a', function (req, res) {
    res.render('index');
});

app.get('/hi', function (req, res) {
    res.send(req.query.name + "," + req.query.age + "GET");
});

app.post('/hi', function (req, res) {
    res.send(req.body.name + "," + req.body.age + "POST")
});

//정적 파일을 불러올땐 서버를 안꺼도 되지만
//동적 파일 처리를 하게되면 서버를 껏다 켜야한다
// app.get('/danamic', function (req, res) {
//     var data = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Title</title>
// </head>
// <body>
// Hello Static
// </body>
// </html>`;
//     res.send(data);
// })


//쿼리스트링
//쿼리스트링이란?
//http://127.0.0.1:3000/topic?id=1 에서
//?id=1 부분이 쿼리 스트링
//해당 값에 따라 다르게 처리하는 방법은 다음과 같다
//쿼리스트링은 요청이기 때문에 req에 들어가며 req.query."키값"으로 접근이 가능하다
app.get('/topic', function (req, res) {
    res.send(req.query.id);
});

app.get('/login', function (req, res) {
    res.send("login plz");
});
app.listen(3000, function () {    //port번호
    console.log("connected 3000");
});