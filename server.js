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

app.get('/humans/:id/edit', (req, res) => {
	res.render('edit.ejs', {
		humans: Humans[req.params.index],
		id: req.params.index
	})
})

app.delete('/humans/:id', (req, res) => {
	Humans.splice(req.params.id, 1);
	res.redirect('/humans');
});

app.put('/humans/:id', (req, res) => {
	if(req.body.hat === 'on') {
		req.body.hat = true;
	} else {
		req.body.hat = false;
	}
	Humans[req.params.id] = req.body;
	res.redirect('/humans')
})


//Listener
app.listen(3000, () => {
	console.log('listener working');
})

