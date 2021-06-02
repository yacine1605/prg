const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
require('dotenv').config();
const morgan = require('morgan');
const app = express();

app.use(cors());

const portRouter = require('./api/controllers/port/router');
const userRouter = require('./api/controllers/user/router');
const prixRouter = require('./api/controllers/prix/router');
const infoRouter = require('./api/controllers/infoFish/router');

app.use(helmet());
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/user', userRouter);
app.use('/port', portRouter);
app.use('/prix', prixRouter);
app.use('./infofish', infoRouter);

const PORT = process.env.PORT || 2000;

mongoose.connect(process.env.MONGO_URL, {
	useCreateIndex: true,
	useUnifiedTopology: true,
	useNewUrlParser: true,
});
const db = mongoose.connection;

db.once('open', () => console.log('Database connected'));
app.use(express.json());

app.use((error, req, res, next) => {
	res.send({
		message: error.message,
	});
});

app.listen(PORT, () => console.log('LISTENNING IN PORT on http://localhost:' + PORT));
