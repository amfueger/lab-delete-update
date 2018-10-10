const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


//model
const humansController = require('.controllers/humans')


//middelware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use('/humans', humansController)

//Listener
app.listen(3000, () => {
	console.log('listener working');
})