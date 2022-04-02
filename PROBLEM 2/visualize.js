const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express();            

//Routes


const mongooseConnectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   // useCreateIndex: true,
    //useFindAndModify: false,
    //autoIndex: true
}

mongoose.connect( 'mongodb://localhost:27017/mytask ', mongooseConnectOptions)
.then(() => {
    console.log('connected to db');
    app.listen(5000, () => {
        console.log("Node server listening on port " + 5000);
    })
}).catch((err) => {
    console.log('err in db connection');
    console.log(err.message);
})

app.use(bodyParser.json({ limit : '100mb'}));
app.use(bodyParser.urlencoded({ extended : true }))
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});



app.use((req, res, next) =>{
    // console.log(req.url);
    next();
})

//const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const visualizeSchema = new Schema(
    {
      _id: {type:Number},
       count:{type : Number} 
    }
  
);

const hurricaneModel = mongoose.model(
    "visualize",
    visualizeSchema,
    "visualize"
  );

  app.get('/visualize',(request,response)=>{
      //console.log("hi")
      hurricaneModel.find().then(data=>{
          response.status(200).send({
              data
          })
      }).catch(err=>{
          console.log(err)
      })
  })
