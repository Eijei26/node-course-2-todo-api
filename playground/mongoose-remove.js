const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//     console.log(res);
// });

// Todo.findOneAndRemove({
//     _id: '5c356976a7556c15af879b5c'
// }).then((todo) => {
//     console.log(todo);
// });

Todo.findByIdAndRemove('5c356976a7556c15af879b5c').then((todo) => {
    console.log(todo);
});