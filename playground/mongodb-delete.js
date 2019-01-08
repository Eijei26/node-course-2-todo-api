// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to the mongodb server');
    }

    console.log('Connected to the server');

    var db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({"text": "Eat lunch"}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({"text": "Eat lunch"}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: "Alvin John"}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5c343243639dba1ee83e43c7')})
        .then((result) => {
            console.log(result);
    });

    // client.close();
});