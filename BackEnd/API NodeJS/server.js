// les declarations 
const express = require('express');
const bodyparser = require('body-parser');
const cookieparser =  require('cookie-parser');
const cors = require('cors');
var multer = require('multer');
var upload = multer();
const Route = require("./Routes/Routes");
const PORT =process.env.PORT || 5000;
const app = express();
var fs = require('fs');
var path = require('path');


require('./Models/BD');


const corsOptions={
    origin: 'http://localhost:3000',
    credentials:true,
    'allowedHeaders':['sessionId','Content-Type'],
    'exposedHeaders':['sessionId'],
    'methods':'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue':false
}


app.use(cors(corsOptions));
app.use(bodyparser.json());
app.use(cookieparser()); 
app.use(bodyparser.urlencoded({extended: true}));


app.use('/API', Route)

app.listen(PORT,()=>{
    console.log('on ecoute le port :', PORT);
});