const { MongoClient, ObjectID } = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log(err)
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

    // db.collection('Todos').deleteMany({
    //     text: 'do deim'
    // }).then(res => {
    //     console.log(JSON.stringify(res, undefined, 2))
    // })

    // db.collection('Todos').deleteOne({
    //     text: 'do deim'
    // }).then(res => {
    //     console.log(res)
    // })

    // db.collection('Todos').findOneAndDelete({
    //     text: 'do deim'
    // }).then(res => {
    //     console.log(JSON.stringify(res, undefined, 2))
    // })

    db.collection('Users').deleteMany({
        name: 'Alexandr'
    }).then(res => {
        console.log(res)
    })
    
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5af47e6251091210c9a610f8')
    }).then(res => {
        console.log(res)
    })

    client.close()
})
