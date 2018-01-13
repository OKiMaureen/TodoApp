
//requiring body-parser module
let bodyParser = require('body-parser');

//requiring mongoose
let mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb://test:test@ds143030.mlab.com:43030/todoapp');

//create a schema - this is like a blueprint
let todoSchema = new mongoose.Schema({
    item: String
});

//create model
let Todo = mongoose.model('Todo', todoSchema);



//creating dummy data
//let data = [{ item: 'call me' }, { item: 'eat food' }, { item: 'read book' }, { item: 'sing song' }];

let urlencodedParser = bodyParser.urlencoded({ extended: false });

//exporting  todoController module
module.exports = (app) => {

    // using the http method to get index page on server    
    app.get('/todo', (req, res) => {
        //get data from mongodb and pass it to view
        Todo.find({}, (err, data) => {
            if (err) throw err;
            res.render('pages/index', { todos: data });
        })
        
    });

    // using the http post method to sumbit form and update data on server
    app.post('/todo', urlencodedParser, (req, res) => {
        //get data from view and add to mongodb
        let newTodo = Todo(req.body,(err,data) =>{
            if (err) throw err;
            res.json(data);
        })
        
    });

    // using the http delete method to delete data from serfver
    app.delete('/todo/:item', (req, res) => {
        //delete requested item from mongodb
        Todo.find({item:req.params.item.replace(/\-/g, " ")}).remove((err,data)=>{
            if (err) throw err
            res.json(data);
        })
     
    });
}
