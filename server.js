const express = require('express');
const app = express();

const Humans = require('.models/humans')



app.get(3000, () => {
	console.log('listener working');
})