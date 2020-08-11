var express = require('express');
var routes=require('./routes/routes')
app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);


// app.get('/', function (req, res) {
//     res.send('Hello World')
//   })



// app.use('/api/student',require('./controllers/student'));

port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log('RESTful API server started on: ',port);
});

