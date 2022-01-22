const express = require('express')
const pug = require('pug')

const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

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
    
   res.render('responce', {message})
})

//Assignment 4: cookies

app.get('/myName', (req, res)=>{
    res.send('Bella')
})



app.listen(3000, ()=>{
    console.log('The server is listening on port 3000.')
})