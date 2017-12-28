
//requiring express module
const express = require('express');

//requiring todoController module
const todoControllers = require('./controllers/todoController.js');

const app = express();
//set up template engine using ejs
app.set('view engine', 'ejs');

//set up static file
app.use(express.static('./public'));

//fires controllers from todoController module
todoControllers(app);

//listen to server in port 3000
app.listen(process.env.PORT || 3000, ()=>{console.log('listening to port 3000')});

