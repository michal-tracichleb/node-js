const express = require("express");
const port = 3000;
const app = express();

// Podpięcie css
var path = require('path')
app.use('/assets', express.static(path.join(__dirname, "./assets")));
app.use('/js', express.static(path.join(__dirname, "./js")));
app.use('/js', express.static(__dirname + './../public/js'));


//ustawienie, ze moja aplikacja musi korzystac z silnika hbs 
app.set("view engine", 'hbs')
//gdy uzytkownik wchodzi na stronę  
app.get('/', function (req, res) {
    res.render('index', {
        pageTitle: "Michał Tracichleb"
    })
})
app.get('/about', function (req, res) {
    res.send("My site")
})
app.listen(port, (err) => {
    if (err) {
        return console.log("coś poszło nie tak...:", err)
    }
    console.log("serwer działa na porcie", port)
}) 