const express = require('express');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(express.json());

app.use('/task', taskRoutes);
app.use('/', taskRoutes);
app.use('/:id', taskRoutes);

module.exports = app;