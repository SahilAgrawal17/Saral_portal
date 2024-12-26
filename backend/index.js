const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const authRouter = require('./Routes/authRouter')
require('dotenv').config();
require('./Models/db');


const PORT = process.env.PORT || 8080;


app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,                  // Allow cookies (JWT token in cookies)
}));


app.use('/auth', authRouter);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
