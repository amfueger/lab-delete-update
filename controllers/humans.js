const express = require('express')
const router = express.Router();


const Humans = require('../models/humans');
//stuff
router.get('/', (req, res) => {
	res.render('index.ejs', {Humans});
});

router.get('/:id/edit', (req, res) => {
	res.render('edit.ejs', {
		humans: Humans[req.params.index],
		id: req.params.index
	})
})

router.delete('/:id', (req, res) => {
	Humans.splice(req.params.id, 1);
	res.redirect('/humans');
});

router.put('/:id', (req, res) => {
	if(req.body.hat === 'on') {
		req.body.hat = true;
	} else {
		req.body.hat = false;
	}
	Humans[req.params.id] = req.body;
	res.redirect('/humans')
})


module.exports = router;

