const mongoose = require('mongoose');
require('dotenv').config({ path : "variables.env"});
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
