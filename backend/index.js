const express = require('express');
const app = express();
const mongoose = require('mongoose');
const body_parser = require('body-parser');
const servicesSchema = require('./servicesModel');
const cors = require('cors');
require('dotenv/config');
app.use(body_parser.json());
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true,useUnifiedTopology: true },()=>{
  console.log("db connected");
})
// app.get('/',(req,res)=>{
//   res.send('its home');
// });
app.use(cors({
  origin:"http://localhost:3002"
}))
app.post('/services',async(req,res)=>{
const newData = req.body;
const CreateNewData = servicesSchema(newData);
await CreateNewData.save();
res.send(CreateNewData);
});
app.get('/getservices', async(req,res)=>{
let getser  = await servicesSchema.find();
res.status(200).send(getser);

});
app.listen(9999);