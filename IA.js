var express = require('express')
var app = express()
var bodyParser = require('body-parser')


app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.set('view engine','ejs')


app.get('/',(req,res) => {
    res.render(__dirname + '/views/IA.ejs')
})


app.post('/test',(req,res) => {
    var text = req.body.text
    var saludo = "Como Estas"
    if(text == 'Hola' && 'hola') {
        res.render(__dirname + '/views/config.ejs',{saludo:saludo})
    }
})


app.listen(500)