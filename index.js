const express = require('express');
//const db = require('./config/db');
const MongoClient = require('mongodb').MongoClient;
//const db = require('./dbQueries')
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
//const productRouter = express.Router();



//connection modules(1)
const any = require('./controllers/any')
const any2 = require('./controllers/any2')
app.use('/any', any)
app.use('/any2', any2)

//routers(2)
//var index = require('./routes/index');
//app.use('/', index);

//require('./routes')(app,{});

MongoClient.connect('localhost', (err, database) => {
    if(err) return console.log(err)
    require('./routes')(app, database);
    app.listen(port, () => {
        console.log(`We are live on ${post}`)
    })
})



app.use((err, request, response, next) => {
    // логирование ошибки, пока просто console.log
    console.log(err)
    response.status(500).send(`Something broke!`)
})

app.listen(port, (err) => {
    if(err) {
        return console.log('something dark happend')
    }

    console.log(`server is listening on ${port}`)
})