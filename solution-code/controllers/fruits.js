const express = require('express');
const router = express.Router();

//        .post()  .get()   .put()   .delete()
// CRUD...Create, Read, Update, Delete
//        NEW    INDEX/SHOW  UPDATE  DELETE

// INDEX ...return all
// /fruits/
router.get('/', (req, res) => {
	res.render('fruits/index.ejs', { fruits: fruits });
});

// FORM TO CREATE A NEW FRUIT
router.get('/new', (req, res) => {
	res.render('fruits/new.ejs');
});

// SHOW ...return one item
router.get('/:id', (req, res) => {
	console.log(req.params);
	// console.log(fruits);
	const fruit = fruits[req.params.id];
	console.log(fruit);
	res.render('fruits/show.ejs', { fruit: fruit });
});

// POST
router.post('/', (req, res) => {
	console.log(req.body);
    //  ternary operator...short hand for an if/else statement
    req.body.readyToEat = req.body.readyToEat === 'on' ? true : false
    console.log(req.body)
	fruits.unshift(req.body);
	// redirect to the INDEX route for fruits
	res.redirect('/fruits');
});

module.exports = router;
