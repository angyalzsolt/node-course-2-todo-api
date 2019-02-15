const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}

	console.log('Connected to MondgoDB server');
	const db = client.db('TodoApp');

	// findOneAndUpdate
	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5c66d04b57de65f6843f8eb4')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// })


	// db.collection('Users').findOneAndUpdate({
	// 	_id: new ObjectID('5c66cbda35f41e2fbcbcb3c5')
	// }, {
	// 	$set: {
	// 		name: 'Jozsef Angyal'
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result)=> {
	// 	console.log(result)
	// })

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5c66cbda35f41e2fbcbcb3c5')
	}, {
		$inc: {
			age: 1
		},
		$set: {
			name: 'Jozsefke Angyal'
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	})


	// client.close();
});