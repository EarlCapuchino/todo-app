const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json()); // Allows us to access request bodies

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected!'))
.catch(err => console.log(err));
  

const todosRoutes = require('./routes/todos');
app.use('/api/todos', todosRoutes)
