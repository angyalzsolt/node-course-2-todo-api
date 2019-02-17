const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.deleteMany({ }).then((result)=> {
// 	console.log(result);
// });


Todo.findOneAndDelete({
	_id: '5c6965e2bb3e6e1921c9c12b'
}).then((todo) => {
	console.log(todo);
});