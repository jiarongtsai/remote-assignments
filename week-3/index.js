const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.send('Hello, My Server!')
})

app.get('/getData', (req, res)=>{
    //get the query sting
    const input = req.query.number
    const num = Number(input)
    
    //main logic
    if(!input)
        res.send('Lack of Parameter')
    if(num > 0){
        let sum =0
        for(let i = 0; i<=num; i++){
            sum+=i
        }
        //res.send only accept string data
        res.send(sum.toString())
    }
    res.send('Wrong Parameter')
        
})


app.listen(3000, ()=>{
    console.log('The server is listening on port 3000.')
})