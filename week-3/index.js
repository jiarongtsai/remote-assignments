const express = require('express')
const pug = require('pug')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/getData', (req, res)=>{
    //get the query sting
    const input = req.query.number
    const num = Number(input)
    //variable for store data
    let message =''
    
    //main logic
    if(!input)
        message = 'Lack of Parameter'
    else if(num > 0){
        let sum =0
        for(let i = 0; i<=num; i++){
            sum+=i
        }
        message = sum.toString()
    }
    else
        message = 'Wrong Parameter'
    
   res.render('response', {message})
})

//Assignment 4: cookies

app.get('/myName', (req, res)=>{
    const name = req.cookies.name
    if(name)
        res.render('name', {name})
    else
        res.redirect('/trackName')
})

app.get('/trackName', (req, res)=>{
    res.render('name')
})

app.post('/trackName', (req, res)=>{
    res.cookie('name', req.body.name)
    res.redirect('/myName')
})



app.listen(3000, ()=>{
    console.log('The server is listening on port 3000.')
})