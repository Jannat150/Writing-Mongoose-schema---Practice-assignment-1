const express = require('express');
const { resolve } = require('path');
const mongoose=require("mongoose")
const mongoUrl="mongodb+srv://Jannat:jannat10175168@jannat.5n3xo.mongodb.net/assignment"
const connection=mongoose.connect(mongoUrl)
const user=require("./model/User")

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
