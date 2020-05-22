require('dotenv').config();

const express = require('express');
const app = express();

const logs = require('./controllers/logcontroller');
const user = require('./controllers/usercontroller');

const sequelize = require('./db');
sequelize.sync();

app.use(express.json());
app.use(require('./middleware/headers'));

app.listen(process.env.PORT, () => console.log(`App is listening on ${process.env.PORT}`));

app.use('/user', user);
app.use(require('./middleware/validate-session'));
app.use('/logs', logs);