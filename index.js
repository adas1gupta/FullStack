const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./server/config/keys');
require('./server/models/User');
require('./server/services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
app.use(
    cookieSession({
        //how long cookie can exist inside browser before it expires automatically
        maxAge: 30 * 24 * 60 * 60 * 1000, //milliseconds
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./server/routes/authRoutes')(app);


//app.get('/',(req,res) => { 
//get is retrieving a new route handler
// '/' is the name of the host; you can have something like '/category'
// req is request from someone; res is response to someone
// res.send... closes request and sends back response of hi: there 
//    res.send({hi: 'there'});
//});

const PORT = process.env.PORT || 5000; //by default, use value of 5000
app.listen(PORT); //incoming traffic on port 5000 (localhost:5000 in google)

//this file is to start up the application