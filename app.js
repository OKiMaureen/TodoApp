<<<<<<< ft-installations
const express = require("express");


express()
.set("views engine", ejs)
=======
//requiring express module
const express = require('express');

//requiring todoController module
const todoControllers = require('./controllers/todoController.js');

const app = express();
//set up template engine
app.set('view engine', 'ejs');

//set up static file
app.use(express.static('./public'));

//fires controllers
todoControllers(app);

//listen to server in port 3000
app.listen(3000, ()=>{console.log('listening to port 3000')});
>>>>>>> develop
