const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// const id = '5c6832d0a1fddc202c8dba1c1';

// if(!ObjectId.isValid(id)){
// 	console.log('ID not valid.');
// }
// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });


// Todo.findById(id).then((todo) => {
// 	if(!todo){
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));


const id = '5c67c2177520221698e48833';

if(!ObjectId.isValid(id)){
	console.log('ID not valid');
}

User.findById(id).then((user) => {
	if(!user){
		return console.log('Id not found');
	}
	console.log('User by id', user);
}).catch((e) => console.log(e));
