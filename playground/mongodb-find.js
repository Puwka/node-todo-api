const { MongoClient, ObjectID } = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log(err)
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

    db.collection('Users').find({
        name: 'Alexandr'
    })
    .count()
        .then(count => {
            console.log(`Ammount of Alexandrs: ${count}`)
        })
        .catch(e => console.log(e))

    client.close()
})
