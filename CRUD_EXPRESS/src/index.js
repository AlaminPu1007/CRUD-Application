
require('./models/User');

const express = require ('express');
const mongoose = require('mongoose');
const authRoutes = require ('./routes/authRoutes');
const bodyParser = require ('body-parser');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);


const mongoUri = 'mongodb+srv://admin:admin@cluster0-2wtmd.mongodb.net/CRUD?retryWrites=true&w=majority';///admin is password

mongoose.connect(mongoUri,{
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

//to check connection or error

mongoose.connection.on('connected',()=>{
	console.log('mongoose is connected');
});

mongoose.connection.on('error',(err)=>{
	console.error('We get some error', err);
});

app.get('/', requireAuth, (req,res)=>{
	res.send(`Your Email: ${req.user.email}`);          
});

app.listen(3000,()=>{
	console.log('listening port on 3000');
});