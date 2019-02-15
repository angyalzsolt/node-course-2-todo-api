// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// let obj = new ObjectID();
// console.log(obj);
// let user = {name: 'Zsolt', age: 24};
// let {name} = user;
// console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}

	console.log('Connected to MondgoDB server');
	// const db = client.db('TodoApp');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result)=>{
	// 	if(err){
	// 	return console.log('Unable to insert todo');
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// })


	// const db = client.db('TodoApp');

	// db.collection('Users').insertOne({
	// 	name: 'Jozsef Angyal',
	// 	age: 17,
	// 	location: 'Szombathely'
	// }, (err, result) => {
	// 	if(err) {
	// 		return console.log('Unable to insert user.');
	// 	}

	// 	console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
	// })


	client.close();
});