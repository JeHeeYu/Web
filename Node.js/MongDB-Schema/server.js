const mongoose = require('mongoose');
const express = require('express');
const server = express();
const User = require('./models/User');
require('dotenv').config({ path : "variables.env"});

server.get('/', (req, res) => {
    const newUser = new User();
    newUser.email = "jehee.naver.com";
    newUser.name = "jehee";
    newUser.age = 25;
    newUser.save().then((data) => {
        console.log(data);
        res.json({ 
            message : "User Create Successfully"
        });
    })
    .catch((err) => {
        res.json({
            message : "User war not Succesfully created"
        });
    });
});

server.listen(3000, (err) => {
    if(err)
    {
        return console.log(err);
    }
    else
    {
        mongoose.connect(process.env.mongodb_url, (err) => {
            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log("Connected to database is successfully");
            }
        })
    }
});
