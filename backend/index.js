const express=require('express');
const app=new express();
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({extended:true}));
 app.use(express.json());
app.listen(5000);