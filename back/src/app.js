const express = require('express');
const taskRoutes = require('./routes/taskRoutes');

const cors = async (_req, res, next) => {    
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');    
  res.header('Access-Control-Allow-Headers', '*');    
  next();   };       

const app = express();

app.use(cors);

app.use(express.json());

app.use('/', taskRoutes);

module.exports = app;