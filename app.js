var path = require('path')
var express = require('express')

var index1 = require('./routes/index')
var index2 = require('./routes/index')
var index3 = require('./routes/index')

console.log(obj)
console.log(++index1.val)
console.log(++index2.val)
console.log(++index3.val)
console.log(index1.num())

var app = express()

app.use(express.static(path.join(__dirname, 'app')))

app.get('/', function(req, res){
    res.send('hello, node')
})

app.listen(8000, function(){
    console.log('server run at port 8000');
})