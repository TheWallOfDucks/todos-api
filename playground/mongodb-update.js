const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos')
    //     .findOneAndUpdate(
    //     { _id: new ObjectID('59d40e609310167c8de8d815') },
    //     { $set: { completed: true } },
    //     { returnOrignal: false })
    //     .then(result => {
    //         console.log(result);
    //     });

    db.collection('Users')
        .findOneAndUpdate(
        { _id: new ObjectID('59c2f1e7b80a9f3f34652d88') },
        {
            $set: { name: 'Ricky' },
            $inc: { age: 1 }
        },
        { returnOrignal: false })
        .then(result => {
            console.log(result);
        });

    // db.close();
});