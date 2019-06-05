const express = require('express')
const app = express();
const bodyparser = require('body-parser')
const login = require('../functions/login')
const mongoose = require('mongoose')

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:true
}));

mongoose.connect('mongodb://localhost/ihc', {useNewUrlParser: true});

app.post('/login', async (request, response)=>{
    try{
        const loginData = request.body.data;
        await login(loginData.email, loginData.password);
        response.send({success:true});

    }catch(err){
        response.send({success:false})
        //console.error(err)
    }
})

app.listen(4040);