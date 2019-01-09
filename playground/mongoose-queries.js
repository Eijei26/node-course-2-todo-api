const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//var id = "5c3550e570d90c2ca8937af911";

// if(!ObjectID.isValid(id)) {
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log(`Todos ${todos}`);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log(`Todo ${todo}`);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('ID not found');
//     }
//     console.log(`Todo By Id ${todo}`);
// }).catch((e) => {
//     console.log(e);
// })

let userId = '5c3454db580a2d23a8362f78';

User.findById(userId).then((user) => {
    if(!user) {
        return console.log('User not found');
    }
    console.log('User: ',user);
}).catch((e) => console.log(e))