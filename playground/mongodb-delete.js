const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}

	console.log('Connected to MondgoDB server');
	const db = client.db('TodoApp');

	// deleteMany
	// db.collection('Todos').deleteMany({text: 'Eat luch'}).then((result) => {
	// 	console.log(result);
	// });

	// deleteOne
	// db.collection('Todos').deleteOne({text: 'Eat luch'}).then((result) => {
	// 	console.log(result);
	// });

	// findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// })


	// db.collection('Users').deleteMany({name: 'Jozsef Angyal'}).then((result) => {
	// 	console.log(result);
	// })

	db.collection('Users').findOneAndDelete({
		_id: new ObjectID('5c66cc31cb42c8040470f032')
	}).then((result) => {
		console.log(result);
	})

	// client.close();
});