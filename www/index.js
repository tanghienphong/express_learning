const express = require('express')
const bodyParser = require('body-parser')

const app = express()
// app.use(bodyParser.urlencoded({extended:false}))

const parser = bodyParser.urlencoded({extended:false})
app.post('/getname',parser,(req,res)=>{
    const name = req.body.name
    res.send({name})
})

app.post('/getname02',(req,res)=>{
    const name = req.body.name
    res.send({name})
})

app.get('/',(request, response)=>{
    response.send({
        message: 'Hello World!'
    })
})
app.get('/:name/:age',(req,res)=>{
    // let myname = req.params.name
    // let age = +req.params.age

    let { name, age} = req.params
    res.send({name,age})
})
app.get('/:pheptinh/:a/:b',(req,res)=>{
    const { pheptinh, a, b } = req.params
    if(pheptinh=='chia' && b == 0)
    res.send({
        error: 'Error!'
    })
    const cal = new Calculate(pheptinh, a, b)
    res.send({
        result: cal.getResult()
    })  
})

class Calculate{
    constructor(pt, a, b){
        this.pt = pt,
        this.a = a;
        this.b = b;
    }
    get pheptinh(){
        if(this.pt=='cong') return '+'
        if(this.pt=='tru') return '-'
        if(this.pt=='nhan') return '*'
        return '/'
    }
    getResult(){
        let r = this.a + this.pheptinh + this.b // 3+4
        // return r+'='+eval(r);
        return `${r} = ${eval(r)}`
    }
}




app.listen(3000,()=>{
    return console.log('Server started on port 3000')
})

/**
 * npm init -y
 * npm install express --save
 */