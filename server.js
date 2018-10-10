const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


//model
const Humans = require('./models/humans');


//middelware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

//stuff
app.get('/humans', (req, res) => {
	res.render('index.ejs', {Humans});
});


app.delete('/humans/:id', (req, res) => {
	Humans.splice(req.params.id, 1);
	res.redirect('/humans');
});



//Listener
app.listen(3000, () => {
	console.log('listener working');
})

