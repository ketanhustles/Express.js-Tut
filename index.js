const express = require('express')
const app = express()  //now this variable has all express functionalities


app.use(function(req, res, next){
    console.log('middleware chla');
    next();
}); 

//creating a route
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/signin', function (req, res) {
    res.send('Hello World')
})

app.get('/signout', function (req, res) {
    res.send('Hello World')
})

app.get('/about', function (req, res) {
    res.send('responding about')
})

app.get('/profile', function (req, res) {
    res.send('responding profile ...')
})

//error handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(3000);