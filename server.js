const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const User = require('./models/User');
const jwt = require('jsonwebtoken');


mongoose.connect('mongodb+srv://nino:nino@cluster0.rq6ct.mongodb.net/users?retryWrites=true&w=majority');

const app = express();
app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false}));

// routes
app.post('/signup', (req, res, next) => {
    console.log(req.body);
    const newUser = new User({
        email: req.body.email,
        name: req.body.name,
        phone: req.body.phone,
        password: bcrypt.hashSync(req.body.password, 10)
    })

    newUser.save(err => {  
        if(err) {
            return res.status(400).json({
                title: 'error',
                error: 'email in use'
            })
        }
        return res.status(200).json({
            title: 'signup success'
        })
    })
})

app.post('/login', (req, res, next) => {
    User.findOne({ email: req.body.email}, (err, user) => {
        if(err) return res.status(500).json({
            title:'server error',
            error:err
        })
        if(!user){
            return res.status(401).json({
                title:'user not found',
                error:'invalid credentials'
            })
        }
        // incorect password
        if(!bcrypt.compareSync(req.body.password, user.password)){
            return res.status(401).json({
                title:'login failed',
                error:'invalid credentials'
            })
        }
        // if all is good create a token and sen to front
        let refreshToken = jwt.sign({ userId: user._id}, 'secretkey');
        let token = jwt.sign({ userId: user._id}, 'secretkey', { expiresIn: '15s' });
        return res.status(200).json({
            title: 'login success',
            token: token,
            refreshToken: refreshToken
        })
    })
})

// grabbing user info
app.get('/user', (req, res, next) => {
    let token = req.headers.token;  //token
    jwt.verify(token, 'secretkey', ( err, decoded ) => {
        if (err) return res.status(401).json({ 
            title: 'unautorized',
        })
        // token is valid
        User.findOne({_id: decoded.userId}, (err, user) => {
            if(err) return console.log(err)
            return res.status(200).json({
                title:'user grabbed',
                user:{
                    email: user.email,
                    name: user.name
                }
            })
        }) 
    })
})

const port = process.env.PORT || 5000;

app.listen(port, (err) => {
    if(err) return console.log(err);
    console.log("server running on port " + port);
})