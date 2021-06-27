const express=require('express');
const app=new express();
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

 const signupRouter =require('./src/routes/signuproutes');
 const signinRouter =require('./src/routes/signinroutes');
 app.use('/signup',signupRouter);
 app.use('/signin',signinRouter);
app.listen(5000);