const express = require('express');
const app = express();

const Humans = require('./models/humans');


app.get('/humans', (req, res) => {
	res.send(Humans);
});






//Listener
app.listen(3000, () => {
	console.log('listener working');
})

