const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy());

app.get('/',(req,res) => { 
//get is retrieving a new route handler
// '/' is the name of the host; you can have something like '/category'
// req is request from someone; res is response to someone
// res.send... closes request and sends back response of hi: there 
    res.send({hi: 'there'});
});

const PORT = process.env.PORT || 5000; //by default, use value of 5000
app.listen(PORT); //incoming traffic on port 5000 (localhost:5000 in google)

