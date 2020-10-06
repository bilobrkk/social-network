const express = require('express');
const connectDB = require('./config/db');

const app = express();

//CONNECT WITH DataBase
connectDB();

//INIT MIDDLEWARE
app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('API Running'));

//DEFINE ROUTES
app.use('/api/users', require('./routs/api/users'));
app.use('/api/auth', require('./routs/api/auth'));
app.use('/api/profile', require('./routs/api/profile'));
app.use('/api/posts', require('./routs/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));

// run project with npm run dev in root folder