const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors');
const app = express()
const api = require('./api/routes/user_route')
dotenv.config();

const port = process.env.PORT;

require('./api/models/user_models')
require('./api/models/post_models')
app.use(express.json());
app.use(cors());

// app.use('/api',api)
app.use(require('./api/routes/user_route'));
app.use(require('./api/routes/post_route'))


app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
})