const { MongoClient, ObjectID } = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log(err)
  }
  console.log('Connected to MongoDB server')
  const db = client.db('TodoApp')

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, res) => {
  //   if (err) {
  //     return console.log(err)
  //   }
  //
  //   console.log(JSON.stringify(res.ops, undefined, 2))
  // })

  // db.collection('Users').insertOne({
  //   name: 'Alexandr',
  //   age: 22,
  //   location: 'Russia'
  // }, (e, res) => {
  //   if (e) {
  //     return console.log(e)
  //   }

  //   console.log(JSON.stringify(res.ops[0]._id.getTimestamp()))
  // })

  client.close()
})
